'use client';

import { useEffect, useRef } from 'react';
import {
  AmbientLight,
  DirectionalLight,
  IcosahedronGeometry,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

/**
 * One restrained form: a faceted mass that turns slowly and leans toward the
 * pointer. Matte, near-monochrome, no reflections. It is here to establish the
 * subject of the practice on arrival, not to perform.
 *
 * Written against three directly rather than a React renderer. The scene has a
 * single static mesh and needs no reconciliation, so a renderer would add a
 * dependency that has to track React's version for no benefit here.
 */
export default function HeroScene() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = container.current;
    if (!element) return;

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      // No WebGL. The caller's static fallback stays on screen.
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    element.append(renderer.domElement);
    renderer.domElement.setAttribute('aria-hidden', 'true');
    renderer.domElement.style.display = 'block';

    const scene = new Scene();
    const camera = new PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 4.2);

    scene.add(new AmbientLight(0xffffff, 0.55));

    // Raking key light, matching how the physical work is lit.
    const key = new DirectionalLight(0xffffff, 2.1);
    key.position.set(-3.5, 1.2, 2);
    scene.add(key);

    const fill = new DirectionalLight(0xffffff, 0.35);
    fill.position.set(2.5, -1.5, -1);
    scene.add(fill);

    const geometry = new IcosahedronGeometry(1.35, 1);
    const material = new MeshStandardMaterial({
      color: 0xd8d3cc,
      roughness: 0.92,
      metalness: 0,
      flatShading: true,
    });
    const mass = new Mesh(geometry, material);
    scene.add(mass);

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    const resize = () => {
      const { clientWidth, clientHeight } = element;
      if (!clientWidth || !clientHeight) return;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(element);

    // Pause when scrolled away; an idle GPU loop behind the fold is waste.
    let visible = true;
    const visibility = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    visibility.observe(element);

    let frame = 0;
    let previous = performance.now();

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      const delta = Math.min((now - previous) / 1000, 0.1);
      previous = now;
      if (!visible) return;

      mass.rotation.y += delta * 0.075;
      mass.rotation.x = Math.sin((now / 1000) * 0.12) * 0.14;

      // Organic subtle breathing
      const breath = 1 + Math.sin(now / 2200) * 0.022;
      mass.scale.set(breath, breath, breath);

      // Pointer lean, damped hard so the form never feels like a toy.
      mass.position.x += (pointer.x * 0.22 - mass.position.x) * 0.025;
      mass.position.y += (pointer.y * 0.14 - mass.position.y) * 0.025;

      // Studio raking light reacts dynamically to pointer
      key.position.x = -3.5 + pointer.x * 2.4;
      key.position.y = 1.2 + pointer.y * 1.8;

      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      visibility.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={container} className="h-full w-full" />;
}
