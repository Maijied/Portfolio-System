'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import {
  AmbientLight,
  DirectionalLight,
  DoubleSide,
  Group,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Raycaster,
  Scene,
  SRGBColorSpace,
  TextureLoader,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';

type ProjectCardData = {
  title: string;
  slug: string;
  image: string;
};

const FEATURED_PROJECTS: ProjectCardData[] = [
  {
    title: 'Terracotta Head Study',
    slug: 'terracotta-head',
    image: '/media/terracotta-head/01.jpg',
  },
  {
    title: 'Cape Buffalo Head',
    slug: 'cape-buffalo-head',
    image: '/media/cape-buffalo-head/01.jpg',
  },
  {
    title: 'Female Torso in Plaster',
    slug: 'female-torso',
    image: '/media/female-torso/01.jpg',
  },
  {
    title: 'Sleeping Dog Study',
    slug: 'sleeping-dog',
    image: '/media/sleeping-dog/01.jpg',
  },
  {
    title: 'Standing Figure Study',
    slug: 'standing-figure-study',
    image: '/media/standing-figure-study/01.jpg',
  },
];

export default function HeroScene() {
  const container = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const element = container.current;
    if (!element) return;

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      return;
    }

    renderer.outputColorSpace = SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    element.append(renderer.domElement);
    renderer.domElement.setAttribute('aria-hidden', 'true');
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.cursor = 'grab';

    const scene = new Scene();
    const camera = new PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    // Studio lighting
    const ambientLight = new AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const keyLight = new DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(-4, 3, 3);
    scene.add(keyLight);

    const rimLight = new DirectionalLight(0xd8b88a, 1.4);
    rimLight.position.set(4, -2, -1);
    scene.add(rimLight);

    // Main 3D carousel group
    const carouselGroup = new Group();
    scene.add(carouselGroup);

    const textureLoader = new TextureLoader();
    const cardMeshes: Mesh[] = [];
    const count = FEATURED_PROJECTS.length;
    const radius = 2.4;

    const planeGeom = new PlaneGeometry(1.65, 2.2, 1, 1);

    FEATURED_PROJECTS.forEach((item, i) => {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius - 0.4;

      const texture = textureLoader.load(item.image);
      texture.colorSpace = SRGBColorSpace;

      const material = new MeshStandardMaterial({
        map: texture,
        roughness: 0.4,
        metalness: 0.05,
        side: DoubleSide,
      });

      const mesh = new Mesh(planeGeom, material);
      mesh.position.set(x, (i % 2 === 0 ? 0.15 : -0.15), z);
      // Orient toward center
      mesh.rotation.y = angle + Math.PI;
      mesh.userData = { slug: item.slug, title: item.title, initialY: mesh.position.y };

      carouselGroup.add(mesh);
      cardMeshes.push(mesh);
    });

    const raycaster = new Raycaster();
    const mouse = new Vector2(-100, -100);
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let isHoveringCard = false;

    const onPointerMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      pointer.targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.targetY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      mouse.x = pointer.targetX;
      mouse.y = pointer.targetY;
    };

    let touchStartX = 0;
    let touchStartY = 0;
    let isTouching = false;
    let touchMoved = false;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isTouching = true;
        touchMoved = false;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isTouching && e.touches.length > 0) {
        const deltaX = e.touches[0].clientX - touchStartX;
        const deltaY = e.touches[0].clientY - touchStartY;
        if (Math.abs(deltaX) > 6 || Math.abs(deltaY) > 6) {
          touchMoved = true;
        }
        carouselGroup.rotation.y += deltaX * 0.007;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      isTouching = false;
      // If user tapped a card without dragging, navigate on mobile
      if (!touchMoved && e.changedTouches.length > 0) {
        const touch = e.changedTouches[0];
        const rect = element.getBoundingClientRect();
        const touchMouse = new Vector2(
          ((touch.clientX - rect.left) / rect.width) * 2 - 1,
          -(((touch.clientY - rect.top) / rect.height) * 2 - 1)
        );
        raycaster.setFromCamera(touchMouse, camera);
        const intersects = raycaster.intersectObjects(cardMeshes);
        if (intersects.length > 0) {
          const targetSlug = intersects[0].object.userData.slug;
          if (targetSlug) {
            router.push(`/work/${targetSlug}`);
          }
        }
      }
    };

    const onClick = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const clickMouse = new Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      );
      raycaster.setFromCamera(clickMouse, camera);
      const intersects = raycaster.intersectObjects(cardMeshes);
      if (intersects.length > 0) {
        const targetSlug = intersects[0].object.userData.slug;
        if (targetSlug) {
          router.push(`/work/${targetSlug}`);
        }
      }
    };

    element.addEventListener('pointermove', onPointerMove, { passive: true });
    element.addEventListener('touchstart', onTouchStart, { passive: true });
    element.addEventListener('touchmove', onTouchMove, { passive: true });
    element.addEventListener('touchend', onTouchEnd, { passive: true });
    element.addEventListener('click', onClick);

    const resize = () => {
      const { clientWidth, clientHeight } = element;
      if (!clientWidth || !clientHeight) return;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      if (camera.aspect < 1) {
        // Vertical mobile screens: move camera back so cards fit comfortably in view
        camera.position.z = 6.4;
      } else {
        camera.position.z = 5.2;
      }
      camera.updateProjectionMatrix();
    };
    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(element);

    let visible = true;
    const visibility = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    visibility.observe(element);

    let frame = 0;
    let previous = performance.now();

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      const delta = Math.min((now - previous) / 1000, 0.1);
      previous = now;
      if (!visible) return;

      // Smooth pointer interpolation
      pointer.x += (pointer.targetX - pointer.x) * 0.05;
      pointer.y += (pointer.targetY - pointer.y) * 0.05;

      // Continuous slow orbital rotation + pointer parallax
      carouselGroup.rotation.y += delta * 0.18 + pointer.x * 0.008;
      carouselGroup.rotation.x = pointer.y * 0.15;
      carouselGroup.position.x = pointer.x * 0.25;

      // Card hovering interaction
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(cardMeshes);

      isHoveringCard = intersects.length > 0;
      renderer.domElement.style.cursor = isHoveringCard ? 'pointer' : 'grab';

      cardMeshes.forEach((mesh) => {
        const isHit = intersects.length > 0 && intersects[0].object === mesh;
        const targetScale = isHit ? 1.08 : 1.0;
        mesh.scale.lerp(new Vector3(targetScale, targetScale, targetScale), 0.1);

        // Subtle floating bobbing
        mesh.position.y = mesh.userData.initialY + Math.sin(now / 1200 + mesh.position.x * 2) * 0.06;
      });

      // Lighting response
      keyLight.position.x = -4 + pointer.x * 2.5;
      keyLight.position.y = 3 + pointer.y * 2.0;

      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      visibility.disconnect();
      element.removeEventListener('pointermove', onPointerMove);
      element.removeEventListener('touchstart', onTouchStart);
      element.removeEventListener('touchmove', onTouchMove);
      element.removeEventListener('touchend', onTouchEnd);
      element.removeEventListener('click', onClick);
      planeGeom.dispose();
      cardMeshes.forEach((mesh) => {
        (mesh.material as MeshStandardMaterial).dispose();
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [router]);

  return <div ref={container} className="h-full w-full select-none" />;
}
