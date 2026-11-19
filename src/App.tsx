import { useEffect, useMemo, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { newsArticles, type NewsArticle, type NewsCategory } from "./data/news";
import { products, type Product } from "./data/products";

const A = "/assets/";

type Page =
  | "home"
  | "products"
  | "news"
  | "weekly"
  | "weekly-detail"
  | "article-detail"
  | "search"
  | "detail";

const productTypes = ["全部", ...Array.from(new Set(products.map((product) => product.type)))];
const productBrands = Array.from(new Set(products.map((product) => product.brand))).sort((a, b) =>
  a.localeCompare(b, "zh-CN"),
);
const defaultProduct =
  products.find((product) => product.name.toLocaleUpperCase() === "OXVA UNIONE") ?? products[0];
const defaultArticle = newsArticles.find((article) => article.id === "2f-36841") ?? newsArticles[0];
const newsCategories: Array<"全部" | NewsCategory> = [
  "全部",
  "市场数据",
  "政策法规",
  "行业观点",
  "科学研究",
  "产品动态",
];

const normalizeSearch = (value: string) => value.trim().toLocaleLowerCase();
const splitProductLines = (value: string) =>
  value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

function productMatchesQuery(product: Product, query: string) {
  const normalizedQuery = normalizeSearch(query);
  if (!normalizedQuery) return true;

  return [product.name, product.brand, product.type, product.intro, product.specs]
    .filter(Boolean)
    .join(" ")
    .toLocaleLowerCase()
    .includes(normalizedQuery);
}

function releaseDateLabel(product: Product) {
  if (!product.releaseDate) return "日期待确认";
  return product.releaseDate;
}

const newsImages = [
  "b3313.png",
  "50285.png",
  "72461.png",
  "f3695.png",
  "aae95.png",
  "2322b.png",
  "fb4e0.png",
  "c5bb0.png",
  "5f6b0.png",
];

const weeklyIssues = [
  { issue: "23", image: "2ed71.png" },
  { issue: "22", image: "cbc90.png" },
  { issue: "21", image: "adc3d.png" },
  { issue: "20", image: "bbb69.png" },
  { issue: "19", image: "88b62.png" },
  { issue: "18", image: "45392.png" },
  { issue: "17", image: "30028.png" },
  { issue: "16", image: "74169.png" },
];

function Header({ page, go }: { page: Page; go: (page: Page) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const active =
    page === "home"
      ? "home"
      : ["news", "weekly", "weekly-detail", "article-detail"].includes(page)
        ? "news"
        : page === "search"
          ? "search"
          : "products";
  const menuItems: Array<{ page?: Page; label: string; number: string }> = [
    { page: "home", label: "首页", number: "01" },
    { page: "products", label: "产品", number: "02" },
    { page: "news", label: "资讯", number: "03" },
    { page: "search", label: "搜索", number: "04" },
    { label: "收藏", number: "05" },
  ];

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const selectMenuItem = (item: (typeof menuItems)[number]) => {
    setMenuOpen(false);
    if (item.page) {
      go(item.page);
      return;
    }
    window.alert("收藏功能已开启，可在产品卡片上添加收藏。");
  };

  return (
    <header className="site-header">
      <div className="nav-row">
        <button
          className="logo nav-logo-row"
          onClick={() => {
            setMenuOpen(false);
            go("home");
          }}
          aria-label="返回首页"
        >
          <img src={`${A}6e87a.svg`} alt="OXID" />
        </button>

        <div className="nav-row-right">
          <button
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="side-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-button-text" aria-hidden="true">
              <span>菜单</span>
              <span>关闭</span>
            </span>
            <span className="menu-icon-wrap">
              <img src={`${A}8a913.svg`} alt="" />
            </span>
          </button>
        </div>
      </div>

      <div className={`side-nav ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <button
          className="side-nav-overlay"
          onClick={() => setMenuOpen(false)}
          aria-label="关闭菜单"
          tabIndex={menuOpen ? 0 : -1}
        />
        <nav id="side-navigation" className="side-menu" aria-label="主导航" aria-modal="true">
          <div className="side-menu-bg" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="side-menu-inner">
            <ul className="side-menu-list">
              {menuItems.map((item, index) => (
                <li key={item.label}>
                  <button
                    className={`side-menu-link ${item.page === active ? "active" : ""}`}
                    onClick={() => selectMenuItem(item)}
                    tabIndex={menuOpen ? 0 : -1}
                    style={{ transitionDelay: menuOpen ? `${0.22 + index * 0.055}s` : "0s" }}
                  >
                    <span className="side-menu-heading-window">
                      <span className="side-menu-heading" data-label={item.label}>
                        {item.label}
                      </span>
                    </span>
                    <span className="side-menu-number">{item.number}</span>
                    <span className="side-menu-link-bg" />
                  </button>
                </li>
              ))}
            </ul>
            <div className="side-menu-details">
              <span>OXID · INDUSTRY INTELLIGENCE</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

function SearchIcon() {
  return <img className="search-icon" src={`${A}88d6b.svg`} alt="" />;
}

function ProductCard({ product, onOpen }: { product: Product; onOpen: () => void }) {
  const [saved, setSaved] = useState(false);
  return (
    <article className="product-card">
      <button className="product-image" onClick={onOpen} aria-label={`查看 ${product.name}`}>
        <img src={product.imageUrl} alt={`${product.name} 产品图`} loading="lazy" />
      </button>
      <div className="product-meta">
        <button onClick={onOpen}>
          <span>{product.brand}</span>
          <strong>{product.name}</strong>
          <small>
            {product.type} · {releaseDateLabel(product)}
          </small>
        </button>
        <button
          className={`save ${saved ? "saved" : ""}`}
          onClick={() => setSaved(!saved)}
          aria-label={saved ? "取消收藏" : "收藏"}
          aria-pressed={saved}
        >
          {saved ? "●" : "○"}
        </button>
      </div>
    </article>
  );
}

function ProductGrid({
  items,
  onOpen,
  limit,
}: {
  items: Product[];
  onOpen: (product: Product) => void;
  limit?: number;
}) {
  return (
    <div className="product-grid">
      {items.slice(0, limit).map((product) => (
        <ProductCard key={product.id} product={product} onOpen={() => onOpen(product)} />
      ))}
    </div>
  );
}

type DotPhysics = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  scale: number;
  targetScale: number;
};

function InteractiveDots() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Array<HTMLSpanElement | null>>([]);
  const physicsRef = useRef<DotPhysics[]>([]);
  const frameRef = useRef<number>(0);
  const lastPointerRef = useRef({ x: 0, y: 0, time: 0 });
  const reducedMotionRef = useRef(false);
  const [grid, setGrid] = useState({ columns: 0, rows: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const buildGrid = () => {
      const cellSize = window.innerWidth < 600 ? 28 : 32;
      setGrid({
        columns: Math.max(1, Math.floor(container.clientWidth / cellSize)),
        rows: Math.max(1, Math.floor(container.clientHeight / cellSize)),
      });
    };

    const observer = new ResizeObserver(buildGrid);
    observer.observe(container);
    buildGrid();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const total = grid.columns * grid.rows;
    physicsRef.current = Array.from({ length: total }, () => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      scale: 1,
      targetScale: 1,
    }));

    const animate = () => {
      let moving = false;

      physicsRef.current.forEach((dot, index) => {
        const element = dotsRef.current[index];
        if (!element) return;

        dot.vx += -dot.x * 0.045;
        dot.vy += -dot.y * 0.045;
        dot.vx *= 0.88;
        dot.vy *= 0.88;
        dot.x += dot.vx;
        dot.y += dot.vy;
        dot.scale += (dot.targetScale - dot.scale) * 0.18;

        if (
          Math.abs(dot.x) > 0.05 ||
          Math.abs(dot.y) > 0.05 ||
          Math.abs(dot.vx) > 0.05 ||
          Math.abs(dot.vy) > 0.05 ||
          Math.abs(dot.targetScale - dot.scale) > 0.01
        ) {
          moving = true;
        }

        element.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) scale(${dot.scale})`;
      });

      frameRef.current = moving ? requestAnimationFrame(animate) : 0;
    };

    const startAnimation = () => {
      if (!frameRef.current && !reducedMotionRef.current) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    containerRef.current?.style.setProperty("--start-dot-animation", "1");
    const container = containerRef.current;
    if (container) {
      Object.assign(container, { startDotAnimation: startAnimation });
    }

    return () => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    };
  }, [grid]);

  const getDotPosition = (index: number) => {
    const element = dotsRef.current[index];
    const container = containerRef.current;
    if (!element || !container) return null;
    const dotRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const physics = physicsRef.current[index];
    return {
      x: dotRect.left - containerRect.left + dotRect.width / 2 - (physics?.x ?? 0),
      y: dotRect.top - containerRect.top + dotRect.height / 2 - (physics?.y ?? 0),
    };
  };

  const startAnimation = () => {
    const container = containerRef.current as
      | (HTMLDivElement & { startDotAnimation?: () => void })
      | null;
    container?.startDotAnimation?.();
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;
    const now = performance.now();
    const last = lastPointerRef.current;
    const elapsed = Math.max(16, now - last.time);
    const velocityX = ((event.clientX - last.x) / elapsed) * 1000;
    const velocityY = ((event.clientY - last.y) / elapsed) * 1000;
    const speed = Math.min(5000, Math.hypot(velocityX, velocityY));
    lastPointerRef.current = { x: event.clientX, y: event.clientY, time: now };

    dotsRef.current.forEach((element, index) => {
      if (!element || element.dataset.hole === "true") return;
      const position = getDotPosition(index);
      const physics = physicsRef.current[index];
      if (!position || !physics) return;

      const dx = position.x - pointerX;
      const dy = position.y - pointerY;
      const distance = Math.hypot(dx, dy);
      const intensity = Math.max(0, 1 - distance / 145);

      physics.targetScale = 1 + intensity * 0.85;
      element.style.setProperty("--dot-heat", intensity.toFixed(3));

      if (!reducedMotionRef.current && speed > 120 && distance < 145) {
        const safeDistance = Math.max(distance, 1);
        const force = intensity * Math.min(speed / 500, 7);
        physics.vx += (dx / safeDistance) * force + velocityX * 0.0015 * intensity;
        physics.vy += (dy / safeDistance) * force + velocityY * 0.0015 * intensity;
      }
    });

    startAnimation();
  };

  const handlePointerLeave = () => {
    physicsRef.current.forEach((dot, index) => {
      dot.targetScale = 1;
      dotsRef.current[index]?.style.setProperty("--dot-heat", "0");
    });
    startAnimation();
  };

  const handleShockwave = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reducedMotionRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;

    physicsRef.current.forEach((dot, index) => {
      const element = dotsRef.current[index];
      const position = getDotPosition(index);
      if (!element || element.dataset.hole === "true" || !position) return;

      const dx = position.x - pointerX;
      const dy = position.y - pointerY;
      const distance = Math.max(1, Math.hypot(dx, dy));
      const falloff = Math.max(0, 1 - distance / 240);
      if (!falloff) return;

      const force = 22 * falloff;
      dot.vx += (dx / distance) * force;
      dot.vy += (dy / distance) * force;
      dot.targetScale = 1 + falloff;
    });

    startAnimation();
  };

  const holeColumns = grid.columns > 28 ? 18 : grid.columns > 18 ? 10 : 0;
  const holeRows = grid.rows > 7 ? 3 : 0;
  const holeStartColumn = Math.floor((grid.columns - holeColumns) / 2);
  const holeStartRow = Math.max(1, Math.floor(grid.rows * 0.2));

  return (
    <div
      ref={containerRef}
      className="hero-dots"
      aria-hidden="true"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handleShockwave}
      style={{ "--dot-columns": grid.columns } as React.CSSProperties}
    >
      {Array.from({ length: grid.columns * grid.rows }, (_, index) => {
        const row = Math.floor(index / grid.columns);
        const column = index % grid.columns;
        const isHole =
          holeColumns > 0 &&
          column >= holeStartColumn &&
          column < holeStartColumn + holeColumns &&
          row >= holeStartRow &&
          row < holeStartRow + holeRows;

        return (
          <span
            key={`${grid.columns}-${index}`}
            ref={(element) => {
              dotsRef.current[index] = element;
            }}
            className="hero-dot"
            data-hole={isHole}
          />
        );
      })}
    </div>
  );
}

type FeatureSlide = {
  id: string;
  imageUrl: string;
  eyebrow: string;
  title: string;
  article: NewsArticle;
};

function FeatureCarousel({
  slides,
  className,
  onOpenArticle,
}: {
  slides: FeatureSlide[];
  className: string;
  onOpenArticle: (article: NewsArticle) => void;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  const slide = slides[active];

  return (
    <section
      className={`feature-carousel ${className}`}
      aria-roledescription="轮播"
      aria-label={className === "hot-carousel" ? "热门资讯" : "设计趋势资讯"}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <button className="carousel-slide" onClick={() => onOpenArticle(slide.article)}>
        <img key={slide.id} src={slide.imageUrl} alt="" />
        <span className="carousel-copy">
          <small>{slide.eyebrow}</small>
          <strong>{slide.title}</strong>
          <em>阅读全文 →</em>
        </span>
      </button>
      <div className="carousel-controls">
        <div className="carousel-dots" aria-label="选择资讯">
          {slides.map((item, index) => (
            <button
              key={item.id}
              className={active === index ? "selected" : ""}
              onClick={() => setActive(index)}
              aria-label={`第 ${index + 1} 条：${item.title}`}
              aria-current={active === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const hotNewsSlides: FeatureSlide[] = newsArticles
  .filter((article) => !article.designOnly)
  .slice()
  .sort((a, b) => b.views - a.views || b.timestamp - a.timestamp)
  .slice(0, 3)
  .map((article) => ({
    id: article.id,
    imageUrl: article.imageUrl,
    eyebrow: `热门资讯 · ${article.category}`,
    title: article.title,
    article,
  }));

const designTrendSlides: FeatureSlide[] = newsArticles
  .filter((article) => article.designTag !== null)
  .slice()
  .sort((a, b) => b.views - a.views || b.timestamp - a.timestamp)
  .slice(0, 3)
  .map((article) => ({
    id: article.id,
    imageUrl: article.imageUrl,
    eyebrow: `设计趋势 · ${article.designTag}`,
    title: article.title,
    article,
  }));

function Home({
  go,
  onOpenArticle,
}: {
  go: (page: Page) => void;
  onOpenArticle: (article: NewsArticle) => void;
}) {
  return (
    <main className="home-page">
      <section className="home-intro">
        <InteractiveDots />
        <div className="home-intro-content">
          <h1>探索电子烟行业前沿</h1>
          <p>
            持续关注全球行业动态，涵盖政策法规、市场趋势、品牌资讯、产品创新及产业链发展等领域。通过及时的信息
            <br className="desktop-only" />
            整合与专业分析，为行业从业者提供有价值的资讯与市场洞察，助力了解行业趋势、把握市场机遇。
          </p>
        </div>
      </section>

      <section className="home-feature-grid">
        <div className="weekly-column">
          <button className="weekly" onClick={() => go("weekly-detail")}>
            <div>
              <h2>新品周报</h2>
              <p>2026年6月23日-6月30日</p>
            </div>
          </button>
          <button className="weekly-bottom" onClick={() => go("weekly")}>
            <span>点击查看</span>
          </button>
        </div>
        <FeatureCarousel
          slides={hotNewsSlides}
          className="hot-carousel"
          onOpenArticle={onOpenArticle}
        />
        <button className="design-trend" onClick={() => go("news")}>
          <img src={`${A}design-trends-bg.png`} alt="" />
          <span>
            <strong>设计趋势</strong>
            <small>色彩、材质与工艺的行业观察，深度解构产品美学背后的设计逻辑</small>
            <em>了解更多 →</em>
          </span>
        </button>
        <button className="industry" onClick={() => go("news")}>
          <span>
            <strong>行业动态</strong>
            <small>政策法规、品牌动向与市场快讯，实时追踪全球电子烟行业脉搏</small>
            <em>了解更多 →</em>
          </span>
        </button>
        <FeatureCarousel
          slides={designTrendSlides}
          className="trend-carousel"
          onOpenArticle={onOpenArticle}
        />
      </section>

      <footer className="home-footer">
        <div className="about">
          <h2>关于我们</h2>
          <p>
            我们是一家专注于电子烟及新型烟草行业的专业情报平台，持续关注全球行业动态，涵盖政策法规、市场趋势、品牌资讯、产品创新及产业链发展等领域。通过及时的信息整合与专业分析，助力了解行业趋势、把握市场机遇。
          </p>
        </div>
        <FooterLinks
          title="产品"
          items={["全部产品", "换弹式", "一次性"]}
          onClick={() => go("products")}
        />
        <FooterLinks
          title="资讯"
          items={["周报", "行业动态", "设计趋势"]}
          onClick={() => go("news")}
        />
        <div className="copyright">Copyright © 2026 WE WORK. All rights reserved.</div>
        <img className="footer-mark" src={`${A}b9783.svg`} alt="" />
      </footer>
    </main>
  );
}

function FooterLinks({
  title,
  items,
  onClick,
}: {
  title: string;
  items: string[];
  onClick: () => void;
}) {
  return (
    <div className="footer-links">
      <h3>{title}</h3>
      {items.map((item) => (
        <button key={item} onClick={onClick}>
          {item}
        </button>
      ))}
    </div>
  );
}

function Products({
  go,
  onOpen,
}: {
  go: (page: Page) => void;
  onOpen: (product: Product) => void;
}) {
  const [category, setCategory] = useState("全部");
  const [brand, setBrand] = useState("全部品牌");
  const [brandOpen, setBrandOpen] = useState(false);
  const visibleProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          (category === "全部" || product.type === category) &&
          (brand === "全部品牌" || product.brand === brand),
      ),
    [brand, category],
  );

  return (
    <main className="listing-page">
      <div className="listing-title products-title">
        <div>
          <h1>产品总览</h1>
          <p className="catalog-summary">
            OXID 产品目录 · {products.length} 款产品 · {productBrands.length} 个品牌 ·{" "}
            {productTypes.length - 1} 类
          </p>
        </div>
        <button onClick={() => go("search")} aria-label="搜索产品">
          <SearchIcon />
        </button>
      </div>
      <div className="filter-row">
        <div className="filter-tabs">
          {productTypes.map((item) => (
            <button
              key={item}
              className={category === item ? "selected" : ""}
              onClick={() => setCategory(item)}
            >
              [{item}]
            </button>
          ))}
        </div>
        <div className="brand-select">
          <button
            onClick={() => setBrandOpen(!brandOpen)}
            aria-expanded={brandOpen}
            aria-controls="brand-menu"
          >
            {brand}
            <span className={`dropdown-arrow ${brandOpen ? "is-open" : ""}`} aria-hidden="true">
              <img src={`${A}6cf8e.svg`} alt="" />
            </span>
          </button>
          <div
            id="brand-menu"
            className={`brand-menu ${brandOpen ? "is-open" : ""}`}
            aria-hidden={!brandOpen}
          >
            {["全部品牌", ...productBrands].map((item) => (
              <button
                key={item}
                className={brand === item ? "selected" : ""}
                onClick={() => {
                  setBrand(item);
                  setBrandOpen(false);
                }}
                tabIndex={brandOpen ? 0 : -1}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      <ProductGrid items={visibleProducts} onOpen={onOpen} />
      {!visibleProducts.length && <p className="no-results">当前筛选条件下暂无产品</p>}
    </main>
  );
}

function WeeklyLead({ go, compact = false }: { go: (page: Page) => void; compact?: boolean }) {
  return (
    <section className={`weekly-lead ${compact ? "compact" : ""}`}>
      <div className="weekly-lead-copy">
        <img src={`${A}5b373.svg`} alt="" />
        <div>
          {!compact && <h2>本周要闻</h2>}
          <div className="weekly-issue-line">
            <strong>
              24<sup>th</sup>
            </strong>
            <span>2026年12月23日-30日</span>
          </div>
          <p>
            本周聚焦三大设计参考：Geek Bar Meloso Max 2 全屏交互、日本 TARLESS X 电竞场景破圈、glo
            Hilo 京都箔押工艺；并梳理爱尔兰、英国、中国多地政策法规对包装与口味设计的影响。
          </p>
          <div className="weekly-lead-actions">
            <button onClick={() => go("weekly-detail")}>
              立即查看 <img src={`${A}ad76f.svg`} alt="" />
            </button>
            {!compact && (
              <button onClick={() => go("weekly")}>
                全部周报 <img src={`${A}ad76f.svg`} alt="" />
              </button>
            )}
          </div>
        </div>
      </div>
      <button className="weekly-lead-art" onClick={() => go("weekly-detail")}>
        <img src={`${A}209b8.png`} alt="本周周报产品设计" />
        <img
          className="weekly-wordmark"
          src={`${A}${compact ? "21c05.svg" : "3c5b6.svg"}`}
          alt="OXID weekly"
        />
      </button>
    </section>
  );
}

function PopularReading({ onOpenArticle }: { onOpenArticle: (article: NewsArticle) => void }) {
  const items = useMemo(
    () =>
      newsArticles
        .filter((article) => !article.designOnly)
        .slice()
        .sort((a, b) => b.views - a.views || b.timestamp - a.timestamp)
        .slice(0, 8),
    [],
  );
  return (
    <aside className="popular-reading">
      <h3>热门阅读</h3>
      <ol>
        {items.map((item, index) => (
          <li key={item.id}>
            <button onClick={() => onOpenArticle(item)} title={item.title}>
              <span>{index + 1}</span>
              <em>{item.title}</em>
            </button>
          </li>
        ))}
      </ol>
    </aside>
  );
}

function NewsCard({
  article,
  featured = false,
  onOpen,
}: {
  article: NewsArticle;
  featured?: boolean;
  onOpen: () => void;
}) {
  return (
    <article className={`updated-news-card ${featured ? "featured" : ""}`}>
      <button onClick={onOpen}>
        <img src={article.imageUrl} alt={article.title} loading="lazy" />
        <div className="updated-news-meta">
          <span>{article.category}</span>
          <time>{article.shortDate}</time>
        </div>
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
      </button>
    </article>
  );
}

function News({
  go,
  onOpenArticle,
}: {
  go: (page: Page) => void;
  onOpenArticle: (article: NewsArticle) => void;
}) {
  const [filter, setFilter] = useState<"全部" | NewsCategory>("全部");
  const [sort, setSort] = useState<"按热度" | "按时间">("按热度");
  const [trendSort, setTrendSort] = useState<"按热度" | "按时间">("按热度");

  const visibleNews = useMemo(() => {
    const filtered = newsArticles.filter(
      (article) => !article.designOnly && (filter === "全部" || article.category === filter),
    );
    return filtered.slice().sort((a, b) => {
      if (sort === "按热度") return b.views - a.views || b.timestamp - a.timestamp;
      return b.timestamp - a.timestamp || b.views - a.views;
    });
  }, [filter, sort]);

  const trendArticles = useMemo(() => {
    const items = newsArticles.filter((article) => article.designTag !== null);
    return items.slice().sort((a, b) => {
      if (trendSort === "按热度") return b.views - a.views || b.timestamp - a.timestamp;
      return b.timestamp - a.timestamp || b.views - a.views;
    });
  }, [trendSort]);

  const standardNews = visibleNews.slice(1);
  const sideNews = standardNews.filter(
    (_, index) => index < 2 || (index >= 2 && (index - 2) % 3 === 2),
  );
  const primaryNews = standardNews.filter(
    (_, index) => !(index < 2 || (index >= 2 && (index - 2) % 3 === 2)),
  );

  return (
    <main className="updated-news-page">
      <section className="updated-news-hero">
        <WeeklyLead go={go} />
        <PopularReading onOpenArticle={onOpenArticle} />
      </section>

      <div className="updated-news-columns">
        <section className="updated-news-feed">
          <div className="updated-news-filter">
            <div>
              {newsCategories.map((item) => (
                <button
                  key={item}
                  className={filter === item ? "selected" : ""}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <button onClick={() => setSort(sort === "按热度" ? "按时间" : "按热度")}>
              {sort} <img src={`${A}6cf8e.svg`} alt="" />
            </button>
          </div>
          <div className="updated-news-grid">
            <div className="updated-news-primary-flow">
              {visibleNews[0] && (
                <NewsCard
                  article={visibleNews[0]}
                  featured
                  onOpen={() => onOpenArticle(visibleNews[0])}
                />
              )}
              <div className="updated-news-primary-grid">
                {primaryNews.map((article) => (
                  <NewsCard
                    key={article.id}
                    article={article}
                    onOpen={() => onOpenArticle(article)}
                  />
                ))}
              </div>
            </div>
            <div className="updated-news-side-flow">
              {sideNews.map((article) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  onOpen={() => onOpenArticle(article)}
                />
              ))}
            </div>
          </div>
        </section>

        <aside className="design-news-column">
          <div className="design-news-heading">
            <strong>设计趋势</strong>
            <button onClick={() => setTrendSort(trendSort === "按热度" ? "按时间" : "按热度")}>
              {trendSort} <img src={`${A}6cf8e.svg`} alt="" />
            </button>
          </div>
          {trendArticles.map((article) => (
            <button
              key={article.id}
              className="design-news-card"
              onClick={() => onOpenArticle(article)}
            >
              <img src={article.imageUrl} alt={article.title} loading="lazy" />
              <div className="updated-news-meta">
                <span>{article.designTag}</span>
                <time>{article.shortDate}</time>
              </div>
              <h2>{article.title}</h2>
            </button>
          ))}
        </aside>
      </div>
    </main>
  );
}

function Breadcrumbs({
  items,
  go,
  className = "",
}: {
  items: Array<{ label: string; page?: Page }>;
  go: (page: Page) => void;
  className?: string;
}) {
  return (
    <nav className={`content-breadcrumbs ${className}`} aria-label="面包屑">
      {items.map((item, index) => (
        <span key={item.label}>
          {index > 0 && <i>/</i>}
          {item.page ? (
            <button onClick={() => go(item.page!)}>[{item.label}]</button>
          ) : (
            <strong>[{item.label}]</strong>
          )}
        </span>
      ))}
    </nav>
  );
}

function WeeklyCard({
  issue,
  image,
  go,
}: {
  issue: string;
  image: string;
  go: (page: Page) => void;
}) {
  return (
    <article className="weekly-card">
      <button onClick={() => go("weekly-detail")}>
        <img src={`${A}${image}`} alt={`第 ${issue} 期周报封面`} />
        <div className="weekly-card-date">
          <strong>
            {issue}
            <sup>th</sup>
          </strong>
          <span>2026年12月23日-30日</span>
        </div>
        <em>立即查看 →</em>
      </button>
    </article>
  );
}

function WeeklyIndex({ go }: { go: (page: Page) => void }) {
  return (
    <main className="weekly-index-page content-page">
      <Breadcrumbs
        go={go}
        items={[
          { label: "首页", page: "home" },
          { label: "资讯", page: "news" },
          { label: "全部周报" },
        ]}
      />
      <div className="weekly-index-title">
        <h1>全部周报</h1>
        <button onClick={() => go("search")} aria-label="搜索周报">
          <img src={`${A}73963.svg`} alt="" />
        </button>
      </div>
      <WeeklyLead go={go} compact />
      <section className="weekly-card-grid">
        {weeklyIssues.map((issue) => (
          <WeeklyCard key={issue.issue} {...issue} go={go} />
        ))}
      </section>
    </main>
  );
}

const weeklyToc = [
  [
    "🔥 本周设计参考（3）",
    "Geek Bar Meloso Max 2 - 高口数屏幕交互新标杆",
    "日本Drome TARLESS X - 电竞场景破圈之作",
    "BAT日本 glo Hilo 夏季限定款",
  ],
  [
    "📋 政策法规（4）",
    "爱尔兰电子烟新法案通过众议院",
    "英国10月1日起实施电子烟产品税政策",
    "中国《电子烟国标管理条例》",
    "替来他明7月1日起被列管为毒品",
  ],
  ["🔬 技术动态（1）", "雾化芯技术趋势（2026年上半年总结）"],
  [
    "💼 行业事件（3）",
    "PMI无烟产品营收占比达43%",
    "英国研究：电子烟辅助戒烟成功率达61.5%",
    "Shopify全美禁售电子烟",
  ],
];

function WeeklyDetail({ go }: { go: (page: Page) => void }) {
  const [activeTocItem, setActiveTocItem] = useState("section-0");

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const readingLine = 160;

      const sectionKeys = [
        ...weeklyToc.map((_, sectionIndex) => `section-${sectionIndex}`),
        "summary",
        "insights",
        "next-week",
      ];
      let currentSection = 0;

      sectionKeys.forEach((_, sectionIndex) => {
        const section = document.getElementById(`weekly-section-${sectionIndex}`);
        if (section && section.getBoundingClientRect().top <= readingLine) {
          currentSection = sectionIndex;
        }
      });

      if (currentSection < weeklyToc.length) {
        let currentTocItem = `section-${currentSection}`;
        weeklyToc[currentSection].slice(1).forEach((_, linkIndex) => {
          const story = document.getElementById(`weekly-story-${currentSection}-${linkIndex}`);
          if (story && story.getBoundingClientRect().top <= readingLine) {
            currentTocItem = `story-${currentSection}-${linkIndex}`;
          }
        });
        setActiveTocItem(currentTocItem);
      } else {
        setActiveTocItem(sectionKeys[currentSection]);
      }
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main className="report-page content-page">
      <Breadcrumbs
        go={go}
        className="weekly-detail-breadcrumbs"
        items={[
          { label: "首页", page: "home" },
          { label: "资讯", page: "news" },
          { label: "一周要闻", page: "weekly" },
          { label: "周报详情" },
        ]}
      />
      <div className="report-layout">
        <aside className="report-toc">
          <h2>导览</h2>
          {weeklyToc.map(([title, ...links], sectionIndex) => {
            const sectionKey = `section-${sectionIndex}`;
            const isSectionActive = activeTocItem === sectionKey;

            return (
              <section key={title}>
                <h3 className={`toc-section-title ${isSectionActive ? "is-active" : ""}`}>
                  <a
                    href={`#weekly-section-${sectionIndex}`}
                    aria-current={isSectionActive ? "location" : undefined}
                    onClick={() => setActiveTocItem(sectionKey)}
                  >
                    {title}
                  </a>
                </h3>
                {links.map((link, linkIndex) => {
                  const itemKey = `story-${sectionIndex}-${linkIndex}`;
                  const target = `weekly-story-${sectionIndex}-${linkIndex}`;
                  const isActive = activeTocItem === itemKey;

                  return (
                    <a
                      key={link}
                      className={`toc-item-link ${isActive ? "is-active" : ""}`}
                      href={`#${target}`}
                      aria-current={isActive ? "location" : undefined}
                      onClick={() => setActiveTocItem(itemKey)}
                    >
                      {link}
                    </a>
                  );
                })}
              </section>
            );
          })}
          {[
            ["summary", "📊 本周趋势总结", "weekly-section-4"],
            ["insights", "🎯 设计启示", "weekly-section-5"],
            ["next-week", "📅 下周关注", "weekly-section-6"],
          ].map(([itemKey, label, target]) => {
            const isActive = activeTocItem === itemKey;
            return (
              <h3 key={itemKey} className={`toc-extra-title ${isActive ? "is-active" : ""}`}>
                <a
                  href={`#${target}`}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setActiveTocItem(itemKey)}
                >
                  {label}
                </a>
              </h3>
            );
          })}
        </aside>

        <article className="report-article" id="weekly-content">
          <h1>一周要闻： 2026年12月23日-30日</h1>
          <div className="report-summary">
            <img src={`${A}eb98a.svg`} alt="" />
            <img className="summary-quote quote-top" src={`${A}f8f98.svg`} alt="" />
            <img className="summary-quote quote-bottom" src={`${A}dc3a6.svg`} alt="" />
            <p>
              本周聚焦三大设计参考：Geek Bar Meloso Max 2 全屏交互、日本 TARLESS X 电竞场景破圈、glo
              Hilo 京都箔押工艺；并梳理爱尔兰、英国、中国多地政策法规对包装与口味设计的影响。
            </p>
          </div>
          <dl className="report-meta">
            <div>
              <dt>报告周期</dt>
              <dd>2026年6月23日-6月30日</dd>
            </div>
            <div>
              <dt>报告生成</dt>
              <dd>馒头哥（ID设计视角）</dd>
            </div>
            <div>
              <dt>数据来源</dt>
              <dd>vapesee、2Firsts、行业媒体、零售渠道</dd>
            </div>
          </dl>

          <ReportSection id="weekly-section-0" title="🔥 本周设计参考（P0）">
            <ReportStory
              id="weekly-story-0-0"
              title="Geek Bar Meloso Max 2 - 高口数屏幕交互新标杆"
              image="2a771.png"
              caption="Geek Bar Meloso系列（图为前代Meloso Max，Max 2在此基础上升级Ripple全屏显示）"
            >
              <p>
                <b>品牌：</b>Geek Bar（深圳市华诚达关联品牌）
              </p>
              <p>
                <b>核心参数：</b>烟油容量16ml，650mAh电池，Regular / Pulse 双模式切换。
              </p>
              <p>
                <b>CMF亮点：</b>
                Ripple全屏显示、三层机身设计、可调气流，兼顾实时反馈与家族化设计语言。
              </p>
            </ReportStory>
            <ReportStory
              id="weekly-story-0-1"
              title="日本Drome TARLESS X - 电竞场景破圈之作"
              image="380e0.png"
              caption="TARLESS X 赛博朋克风格产品海报，RGB灯效+变形收纳设计"
            >
              <p>
                <b>设计亮点：</b>
                首次将电子烟产品与电竞场景深度绑定，RGB动态灯效、变形收纳和桌面适配形成完整体验。
              </p>
            </ReportStory>
            <ReportStory
              id="weekly-story-0-2"
              title="BAT日本 glo Hilo 夏季限定款 - 传统工艺与科技融合"
              image="0406f.png"
              caption="夏季限定款采用京都箔押工艺打造夏夜银河主题"
            >
              <p>
                <b>CMF亮点：</b>
                日本传统金属箔押技术应用于产品表面，文化叙事成为高端限定产品的新价值。
              </p>
            </ReportStory>
          </ReportSection>

          <ReportSection id="weekly-section-1" title="📋 政策法规">
            <ReportStory
              id="weekly-story-1-0"
              title="爱尔兰电子烟新法案通过众议院"
              image="7d874.png"
              caption="2026年爱尔兰口味禁令示意"
            >
              <p>
                仅允许烟草味或无味，并限制色彩鲜艳、图案化包装。产品差异化将从视觉竞争转向功能与体验竞争。
              </p>
            </ReportStory>
            <ReportStory
              id="weekly-story-1-1"
              title="英国10月1日起实施电子烟产品税政策"
              image="677c3.png"
              caption="英国电子烟税2026年10月实施"
            >
              <p>
                每10ml电子烟液征收2.2英镑，外包装必须预留官方税票位置，设计团队需提前准备合规版本。
              </p>
            </ReportStory>
            <ReportStory
              id="weekly-story-1-2"
              title="中国《电子烟国标管理条例》7月1日起全面实施"
              image="c1ee5.png"
              caption="中国电子烟国家标准"
            >
              <p>包装需满足警示语面积及未成年人禁售标识要求，国内市场差异化竞争将转向其他维度。</p>
            </ReportStory>
            <ReportStory id="weekly-story-1-3" title="替来他明7月1日起被列管为毒品">
              <p>
                <b>地区：</b>中国（含香港）
              </p>
              <h4>核心内容</h4>
              <ul>
                <li>
                  2026年6月17日，国家三部门将替来他明等16种物质列入《非药用类麻醉药品和精神药品目录》。
                </li>
                <li>2026年7月1日起正式施行。</li>
                <li>制造、贩卖、运输含该物质电子烟将以毒品犯罪追诉。</li>
              </ul>
              <h4>对设计的影响</h4>
              <ul>
                <li>市场将进一步规范，非法“上头电子烟”退出市场。</li>
                <li>合规品牌的生存空间进一步扩大。</li>
              </ul>
              <p>
                来源：
                <a
                  href="https://app.people.cn/h5/detail/normal/6892510660641792"
                  target="_blank"
                  rel="noreferrer"
                >
                  人民网
                </a>
              </p>
            </ReportStory>
          </ReportSection>

          <ReportSection id="weekly-section-2" title="🔬 技术动态">
            <ReportStory
              id="weekly-story-2-0"
              title="雾化芯技术趋势（2026年上半年总结）"
              image="6fd3a.png"
              caption="陶瓷雾化芯3D渲染示意"
            >
              <h4>双网棉芯技术</h4>
              <ul>
                <li>漏液率通过“微压力差导油系统”降低70%。</li>
                <li>棉纤维处理、网孔结构设计、发热合金配方等多学科交叉。</li>
                <li>PPM级品质一致性要求。</li>
              </ul>
              <h4>陶瓷雾化芯</h4>
              <ul>
                <li>多孔复合陶瓷材料解决了传统陶瓷芯易干烧、寿命短的痛点。</li>
                <li>单次雾化时间延长30%以上。</li>
                <li>第三代高温雾化技术（多孔陶瓷+金属网+复合结构）逐步成为主流。</li>
              </ul>
              <h4>馒头哥观察</h4>
              <blockquote>
                雾化芯技术的迭代直接影响产品形态设计。更小、更高效的雾化芯意味着设备可以做得更轻薄，这对ID设计是利好——内部空间的释放让外观设计有更多可能性。
              </blockquote>
            </ReportStory>
          </ReportSection>

          <ReportSection id="weekly-section-3" title="💼 行业事件">
            <ReportStory id="weekly-story-3-0" title="PMI无烟产品营收占比达43%">
              <p>
                <b>事件：</b>菲利普莫里斯国际（PMI）在摩洛哥举办Technovation论坛。
              </p>
              <h4>关键数据</h4>
              <ul>
                <li>IQOS加热烟草在布局市场销量首次超越万宝路传统卷烟。</li>
                <li>无烟产品占PMI总净营收43%。</li>
                <li>业务覆盖全球108个市场。</li>
                <li>2008年以来累计研发投入160亿美元。</li>
              </ul>
              <h4>对设计的影响</h4>
              <ul>
                <li>HNB（加热不燃烧）市场持续扩大，意味着更多高端设备设计需求。</li>
                <li>“减害产品”的定位将影响产品设计语言，使其更强调健康感与科技感。</li>
              </ul>
            </ReportStory>
            <ReportStory id="weekly-story-3-1" title="英国研究：电子烟辅助戒烟成功率达61.5%">
              <p>
                <b>事件：</b>英国本土研究发表于《Cureus》期刊。
              </p>
              <h4>关键数据</h4>
              <ul>
                <li>96.4%的英国地方戒烟服务已将电子烟纳入戒烟方案。</li>
                <li>电子烟辅助戒烟成功率达61.5%。</li>
                <li>水果风味是戒烟服务中最主流的产品类型。</li>
              </ul>
              <h4>对设计的影响</h4>
              <ul>
                <li>与爱尔兰口味禁令形成对比，说明不同市场对风味的监管逻辑差异较大。</li>
                <li>戒烟辅助产品可能成为新的产品定位方向。</li>
              </ul>
            </ReportStory>
            <ReportStory id="weekly-story-3-2" title="Shopify全美禁售电子烟">
              <p>
                <b>事件：</b>
                电商平台Shopify宣布全美禁售电子烟，万事达卡同步封堵无证雾化产品支付通道。
              </p>
              <p>
                <b>背景：</b>响应美国25州总检察长联盟打击非法电子烟的诉求。
              </p>
              <h4>关键数据</h4>
              <ul>
                <li>美国非法电子烟市场规模约90亿美元。</li>
                <li>FDA仅批准45款合规产品。</li>
              </ul>
              <h4>对设计的影响</h4>
              <ul>
                <li>合规设计（PMTA认证）将成为进入美国市场的硬门槛。</li>
                <li>支付渠道管控将压缩非法产品生存空间。</li>
                <li>合规品牌的渠道优势将进一步凸显。</li>
              </ul>
            </ReportStory>
          </ReportSection>

          <ReportSection id="weekly-section-4" title="📊 本周趋势总结">
            <ReportStory title="外观趋势">
              <div className="trend-table">
                <div>
                  <b>屏幕交互化</b>
                  <span>Geek Bar Meloso Max 2 Ripple全屏；一次性产品也开始注重可视化反馈。</span>
                </div>
                <div>
                  <b>场景化/配件化</b>
                  <span>TARLESS X变形收纳设计；产品不仅是使用工具，更是场景道具。</span>
                </div>
                <div>
                  <b>传统工艺联名</b>
                  <span>glo Hilo京都箔押；文化溢价成为差异化新方向。</span>
                </div>
                <div>
                  <b>限定版/艺术版</b>
                  <span>BAT“日常 Atelier”项目；收藏价值成为产品新属性。</span>
                </div>
              </div>
            </ReportStory>
            <ReportStory title="CMF趋势">
              <div className="trend-table">
                <div>
                  <b>箔押/金属质感</b>
                  <span>glo Hilo京都箔押，可借鉴程度高，但需评估成本。</span>
                </div>
                <div>
                  <b>RGB灯效</b>
                  <span>TARLESS X电竞风格，适用于特定细分市场。</span>
                </div>
                <div>
                  <b>渐变/幻彩</b>
                  <span>工艺成熟，可借鉴程度高，后续仍需观察具体案例。</span>
                </div>
                <div>
                  <b>模块化拼接</b>
                  <span>Meloso三层机身，结构设计复杂度相应提升。</span>
                </div>
              </div>
            </ReportStory>
            <ReportStory title="技术趋势">
              <div className="trend-table">
                <div>
                  <b>雾化芯小型化</b>
                  <span>设备可以做得更轻薄，外观设计空间增大。</span>
                </div>
                <div>
                  <b>温控算法精准化</b>
                  <span>口感一致性提升，设计团队可以更聚焦外观设计。</span>
                </div>
                <div>
                  <b>智能互联</b>
                  <span>APP控制、社交功能增加产品数字化体验维度。</span>
                </div>
              </div>
            </ReportStory>
          </ReportSection>

          <ReportSection id="weekly-section-5" title="🎯 设计启示">
            <ReportStory title="值得借鉴的设计手法">
              <ol>
                <li>
                  <b>场景化设计：</b>
                  TARLESS X的“电竞桌面配件”定位打破了“电子烟=随身携带”的固有思维。
                </li>
                <li>
                  <b>传统工艺嫁接：</b>箔押工艺的应用打开了CMF的新思路。
                </li>
                <li>
                  <b>屏幕交互下沉：</b>即使是高性价比的一次性产品也开始加入屏幕交互。
                </li>
              </ol>
            </ReportStory>
            <ReportStory title="需要关注的政策风险">
              <div className="trend-table">
                <div>
                  <b>爱尔兰</b>
                  <span>口味、包装、陈列全面限制；紧迫程度高。</span>
                </div>
                <div>
                  <b>英国</b>
                  <span>税票与定价管控；紧迫程度中高。</span>
                </div>
                <div>
                  <b>美国</b>
                  <span>PMTA认证；紧迫程度中。</span>
                </div>
                <div>
                  <b>中国</b>
                  <span>国标合规，相关要求已经实施。</span>
                </div>
              </div>
            </ReportStory>
            <ReportStory title="建议团队关注的方向">
              <ol>
                <li>
                  <b>爱尔兰合规包装研究：</b>
                  提前研究如何在“禁止鲜艳包装”限制下做差异化。
                </li>
                <li>
                  <b>HNB设备设计：</b>PMI数据表明HNB市场持续扩大，值得投入。
                </li>
                <li>
                  <b>限定版/联名版产品设计流程：</b>建立快速响应艺术联名的设计模板。
                </li>
                <li>
                  <b>屏幕交互UI设计：</b>
                  随着更多产品加入屏幕，UI/UX设计能力将成为ID团队的新需求。
                </li>
              </ol>
            </ReportStory>
          </ReportSection>

          <ReportSection id="weekly-section-6" title="📅 下周关注">
            <ul>
              <li>爱尔兰法案参议院审议进展。</li>
              <li>glo Hilo夏季限定正式上市反馈。</li>
              <li>TARLESS X市场表现。</li>
            </ul>
            <p>
              <b>声明：</b>
              本报告基于公开信息整理分析，馒头哥点评仅代表专业ID设计视角，供内部参考。信息如有疏漏，欢迎指正。
            </p>
            <p>
              <b>报告版本：</b>V2.0（格式规范升级版）
              <br />
              <b>下次更新：</b>2026年7月7日周报
            </p>
            <p>
              本内容由 Coze AI
              生成，请遵循相关法律法规及《人工智能生成合成内容标识办法》使用与传播。
            </p>
          </ReportSection>
        </article>
      </div>
    </main>
  );
}

function ReportSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="report-section" id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function ReportStory({
  id,
  title,
  image,
  caption,
  children,
}: {
  id?: string;
  title: string;
  image?: string;
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="report-story" id={id}>
      <h3>{title}</h3>
      {image && <img src={`${A}${image}`} alt={caption ?? title} />}
      {caption && <small>▲ {caption}</small>}
      <div>{children}</div>
    </section>
  );
}

function ArticleDetail({
  go,
  article,
  onOpenArticle,
}: {
  go: (page: Page) => void;
  article: NewsArticle;
  onOpenArticle: (article: NewsArticle) => void;
}) {
  const [relatedTab, setRelatedTab] = useState<"hot" | "popular">("hot");
  const visibleRelated = useMemo(() => {
    const others = newsArticles.filter((item) => item.id !== article.id && !item.designOnly);
    if (relatedTab === "hot") {
      return others
        .slice()
        .sort((a, b) => b.views - a.views || b.timestamp - a.timestamp)
        .slice(0, 5);
    }
    return others
      .slice()
      .sort((a, b) => {
        const sameCatDiff =
          Number(b.category === article.category) - Number(a.category === article.category);
        if (sameCatDiff !== 0) return sameCatDiff;
        return b.timestamp - a.timestamp;
      })
      .slice(0, 5);
  }, [article.category, article.id, relatedTab]);

  return (
    <main className="article-detail-page content-page">
      <Breadcrumbs
        go={go}
        items={[
          { label: "首页", page: "home" },
          { label: "资讯", page: "news" },
          { label: article.category },
        ]}
      />
      <div className="article-detail-layout">
        <article className="long-article">
          <h1>{article.title}</h1>
          <div className="article-intro">
            <img src={`${A}035b4.svg`} alt="" />
            <img className="summary-quote quote-top" src={`${A}aa084.svg`} alt="" />
            <img className="summary-quote quote-bottom" src={`${A}a08a9.svg`} alt="" />
            <p>{article.summary}</p>
          </div>
          <img className="article-hero-image" src={article.imageUrl} alt={article.title} />
          <small className="article-caption">
            ▲ 2Firsts 行业报道配图 · {article.sourceChannel}（{article.sourcePath}）
          </small>
          {article.blocks.map((block, index) => {
            if (block.type === "ul") {
              return (
                <ul key={`ul-${index}`}>
                  {block.items.map((item) => {
                    const colonIndex = item.indexOf("：");
                    const hasLead = colonIndex > 0 && colonIndex <= 14;
                    return (
                      <li key={item}>
                        {hasLead ? (
                          <>
                            <b>{item.slice(0, colonIndex + 1)}</b>
                            {item.slice(colonIndex + 1)}
                          </>
                        ) : (
                          item
                        )}
                      </li>
                    );
                  })}
                </ul>
              );
            }
            if (block.type === "h2" || block.type === "h3") {
              return <h2 key={`h-${index}`}>{block.text}</h2>;
            }
            return <p key={`p-${index}`}>{block.text}</p>;
          })}
        </article>

        <aside className="article-sidebar">
          <dl>
            <div>
              <dt>时间：</dt>
              <dd>{article.fullDate}</dd>
            </div>
            <div>
              <dt>类别：</dt>
              <dd>{article.category}</dd>
            </div>
            <div>
              <dt>来源：</dt>
              <dd>2Firsts · {article.sourceChannel}</dd>
            </div>
          </dl>
          <button
            className="source-button"
            onClick={() => window.open(article.sourceUrl, "_blank", "noopener,noreferrer")}
          >
            阅读原文 <img src={`${A}a0e4a.svg`} alt="" />
          </button>
          <div className="related-tabs" role="tablist" aria-label="相关文章排序">
            <button
              type="button"
              role="tab"
              aria-selected={relatedTab === "hot"}
              className={relatedTab === "hot" ? "selected" : ""}
              onClick={() => setRelatedTab("hot")}
            >
              最热门
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={relatedTab === "popular"}
              className={relatedTab === "popular" ? "selected" : ""}
              onClick={() => setRelatedTab("popular")}
            >
              最受欢迎
            </button>
          </div>
          <div className="related-list">
            {visibleRelated.map((item) => (
              <button key={item.id} onClick={() => onOpenArticle(item)}>
                <div>
                  <strong>{item.title}</strong>
                  <small>
                    {item.category}　{item.shortDate}
                  </small>
                </div>
                <img src={item.imageUrl} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}

function SearchPage({ onOpen }: { onOpen: (product: Product) => void }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("全部");
  const [brand, setBrand] = useState("");
  const visible = useMemo(
    () =>
      products.filter(
        (product) =>
          productMatchesQuery(product, query) &&
          (category === "全部" || product.type === category) &&
          (!brand || product.brand === brand),
      ),
    [brand, category, query],
  );

  const categoryCount = (item: string) =>
    products.filter((product) => item === "全部" || product.type === item).length;
  const brandCount = (item: string) => products.filter((product) => product.brand === item).length;

  return (
    <main className="search-page">
      <label className="search-box">
        <SearchIcon />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="搜索"
          autoFocus
        />
      </label>
      <div className="search-layout">
        <aside>
          <h2>产品分类</h2>
          {productTypes.map((item) => (
            <button
              key={item}
              className={category === item ? "selected" : ""}
              onClick={() => setCategory(item)}
            >
              {item} ({categoryCount(item)})
            </button>
          ))}
          <h3>品牌</h3>
          {productBrands.map((item) => (
            <button
              key={item}
              className={brand === item ? "selected" : ""}
              onClick={() => setBrand(brand === item ? "" : item)}
            >
              {item} ({brandCount(item)})
            </button>
          ))}
        </aside>
        <div className="search-results-wrap">
          <p className="search-result-count" aria-live="polite">
            找到 {visible.length} 款产品
          </p>
          <div className="product-grid search-results">
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} onOpen={() => onOpen(product)} />
            ))}
          </div>
          {!visible.length && <p className="no-results">未找到匹配的产品</p>}
        </div>
      </div>
    </main>
  );
}

function ProductSummary({
  go,
  product,
  aiOpen,
  onToggleAi,
}: {
  go: (page: Page) => void;
  product: Product;
  aiOpen: boolean;
  onToggleAi: () => void;
}) {
  const [open, setOpen] = useState({ specs: true, kit: false, cmf: true });
  const specLines = splitProductLines(product.specs);
  const contentLines = splitProductLines(product.contents);

  return (
    <div className="detail-summary">
      <div className="breadcrumbs">
        <button onClick={() => go("home")}>[首页]</button> /{" "}
        <button onClick={() => go("products")}>[产品库]</button> / <strong>[{product.name}]</strong>
      </div>
      <h1>{product.name}</h1>
      {product.intro && <p className="product-intro">{product.intro}</p>}
      <dl className="basic-info">
        <dt>品牌：</dt>
        <dd>{product.brand}</dd>
        <dt>类型：</dt>
        <dd>{product.type}</dd>
        <dt>发布时间：</dt>
        <dd>{releaseDateLabel(product)}</dd>
      </dl>
      <div className="detail-actions">
        <AiPixelButton onClick={onToggleAi} expanded={aiOpen} />
        <button
          className="product-source-button"
          onClick={() =>
            window.open(product.officialUrl ?? product.sourceUrl, "_blank", "noopener,noreferrer")
          }
        >
          <span>{product.officialUrl ? "产品官网" : "资料来源"}</span>
          <img src={`${A}03b7d.svg`} alt="" />
        </button>
      </div>
      <Accordion
        title="产品规格"
        open={open.specs}
        onToggle={() => setOpen({ ...open, specs: !open.specs })}
      >
        <dl className="spec-list">
          {specLines.map((line, index) => {
            const separator = line.search(/[：:]/);
            const term = separator >= 0 ? line.slice(0, separator + 1) : "特性：";
            const value = separator >= 0 ? line.slice(separator + 1).trim() : line;
            return (
              <div key={`${line}-${index}`}>
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            );
          })}
        </dl>
      </Accordion>
      <Accordion
        title="套件内容"
        open={open.kit}
        onToggle={() => setOpen({ ...open, kit: !open.kit })}
      >
        {contentLines.length ? (
          <ul className="kit-list">
            {contentLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        ) : (
          <p className="body-copy">数据源暂未提供套件清单。</p>
        )}
      </Accordion>
      <Accordion
        title="CMF分析"
        open={open.cmf}
        onToggle={() => setOpen({ ...open, cmf: !open.cmf })}
      >
        <div className="cmf-copy">
          <h3>Product｜产品定位</h3>
          <p>{product.intro ?? "数据源暂未提供产品简介。"}</p>
          <h3>Category｜分类</h3>
          <p>
            {product.brand} · {product.type}
          </p>
          <h3>Source｜信息来源</h3>
          <p>产品信息来自 OXID 公开产品目录，并保留品牌官网与原始资料链接供核验。</p>
        </div>
      </Accordion>
    </div>
  );
}

function AiPixelButton({ onClick, expanded }: { onClick: () => void; expanded: boolean }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pixelRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const timersRef = useRef<number[]>([]);
  const activeRef = useRef(false);

  const clearTimers = () => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  };

  const shuffle = <T,>(items: T[]) => {
    const result = items.slice();
    for (let index = result.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }
    return result;
  };

  const animatePixels = (activate: boolean) => {
    const button = buttonRef.current;
    if (!button) return;

    activeRef.current = activate;
    clearTimers();

    const visiblePixels = pixelRefs.current.filter(
      (pixel): pixel is HTMLSpanElement =>
        pixel !== null &&
        pixel.offsetLeft < button.clientWidth &&
        pixel.offsetTop < button.clientHeight,
    );

    visiblePixels.forEach((pixel) => {
      pixel.style.opacity = "0";
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      button.classList.toggle("is-pixel-active", activate);
      return;
    }

    const stepDuration = 300;
    const revealOrder = shuffle(visiblePixels);
    const concealOrder = shuffle(visiblePixels);
    const stagger = stepDuration / Math.max(visiblePixels.length, 1);

    revealOrder.forEach((pixel, index) => {
      timersRef.current.push(
        window.setTimeout(() => {
          pixel.style.opacity = "1";
        }, index * stagger),
      );
    });

    timersRef.current.push(
      window.setTimeout(() => {
        button.classList.toggle("is-pixel-active", activate);
      }, stepDuration),
    );

    concealOrder.forEach((pixel, index) => {
      timersRef.current.push(
        window.setTimeout(
          () => {
            pixel.style.opacity = "0";
          },
          stepDuration + index * stagger,
        ),
      );
    });
  };

  useEffect(
    () => () => {
      clearTimers();
    },
    [],
  );

  return (
    <button
      ref={buttonRef}
      className="primary ai-pixel-button"
      onClick={onClick}
      onMouseEnter={() => {
        if (!activeRef.current) animatePixels(true);
      }}
      onMouseLeave={() => {
        if (activeRef.current) animatePixels(false);
      }}
      onFocus={() => {
        if (!activeRef.current) animatePixels(true);
      }}
      onBlur={() => {
        if (activeRef.current) animatePixels(false);
      }}
      aria-expanded={expanded}
      aria-controls="ai-analysis-drawer"
    >
      <span className="ai-button-pixels" aria-hidden="true">
        {Array.from({ length: 256 }, (_, index) => (
          <span
            key={index}
            ref={(element) => {
              pixelRefs.current[index] = element;
            }}
            style={{
              left: `${(index % 64) * 16}px`,
              top: `${Math.floor(index / 64) * 16}px`,
            }}
          />
        ))}
      </span>
      <span className="ai-button-content">
        <span className="ai-button-label">AI分析</span>
        <span className="ai-button-icon" aria-hidden="true">
          <img src={`${A}c6ab4.svg`} alt="" />
        </span>
      </span>
    </button>
  );
}

function Accordion({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <section className="accordion" data-open={open}>
      <button onClick={onToggle} aria-expanded={open}>
        <span>{title}</span>
        <span className={`dropdown-arrow ${open ? "is-open" : ""}`} aria-hidden="true">
          <img src={`${A}6cf8e.svg`} alt="" />
        </span>
      </button>
      <div className="accordion-reveal" aria-hidden={!open}>
        <div className="accordion-clip">
          <div className="accordion-body">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Detail({ go, product }: { go: (page: Page) => void; product: Product }) {
  const gallery = product.imageUrls.length ? product.imageUrls : [product.imageUrl];
  const [image, setImage] = useState(gallery[0]);
  const [aiOpen, setAiOpen] = useState(false);

  useEffect(() => {
    setImage(gallery[0]);
    setAiOpen(false);
  }, [product.id]);

  return (
    <main className="detail-page">
      <ProductSummary
        go={go}
        product={product}
        aiOpen={aiOpen}
        onToggleAi={() => setAiOpen(true)}
      />
      <div className="product-viewer">
        {gallery.length > 1 && (
          <div className="thumbnails">
            {gallery.map((item, index) => (
              <button
                key={item}
                className={image === item ? "selected" : ""}
                onClick={() => setImage(item)}
              >
                <img src={item} alt={`${product.name} 角度 ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
        <div className="hero-product-stage" aria-live="polite">
          {gallery.map((item) => (
            <img
              key={item}
              className={`hero-product ${image === item ? "active" : ""}`}
              src={item}
              alt={image === item ? product.name : ""}
              aria-hidden={image !== item}
            />
          ))}
        </div>
      </div>
      <AiAnalysis product={product} open={aiOpen} onClose={() => setAiOpen(false)} />
    </main>
  );
}

function AiAnalysis({
  product,
  open,
  onClose,
}: {
  product: Product;
  open: boolean;
  onClose: () => void;
}) {
  const specLines = splitProductLines(product.specs);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [onClose, open]);

  return (
    <>
      <button
        className={`ai-drawer-backdrop ${open ? "is-open" : ""}`}
        onClick={onClose}
        aria-label="关闭AI分析"
        tabIndex={open ? 0 : -1}
      />
      <article
        id="ai-analysis-drawer"
        className={`ai-report ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-labelledby="ai-analysis-title"
      >
        <button
          className="back-arrow"
          onClick={onClose}
          aria-label="收起AI分析"
          tabIndex={open ? 0 : -1}
        >
          <img src={`${A}d24dc.svg`} alt="" />
        </button>
        <h2 id="ai-analysis-title">{product.name} AI分析</h2>
        <small>基于 OXID 公开产品目录</small>
        <h3>[产品概览]</h3>
        <p>{product.intro ?? "当前数据源尚未提供产品简介。"}</p>
        <h3>[关键规格]</h3>
        <ul>
          {specLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <h3>[分类判断]</h3>
        <p>
          该产品归入 <b>{product.type}</b>，品牌为 <b>{product.brand}</b>
          。分类沿用来源站点的产品目录口径，便于跨产品检索和对比。
        </p>
        <h3>[数据说明]</h3>
        <p>
          当前页面呈现的是结构化资料摘要，不生成来源中不存在的性能结论。产品参数可能因市场版本而异，请以品牌官网和原始资料为准。
        </p>
        <a
          className="analysis-source"
          href={product.sourceUrl}
          target="_blank"
          rel="noreferrer"
          tabIndex={open ? 0 : -1}
        >
          查看原始资料 ↗
        </a>
      </article>
    </>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product>(defaultProduct);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle>(defaultArticle);

  useEffect(() => {
    const hideTimers = new Map<Element, number>();

    const showScrollbar = (target: EventTarget | null) => {
      const scroller = target instanceof Element ? target : document.documentElement;
      const previousTimer = hideTimers.get(scroller);

      if (previousTimer) window.clearTimeout(previousTimer);
      scroller.classList.add("is-scrolling");
      hideTimers.set(
        scroller,
        window.setTimeout(() => {
          scroller.classList.remove("is-scrolling");
          hideTimers.delete(scroller);
        }, 600),
      );
    };

    const handleScroll = (event: Event) => showScrollbar(event.target);
    const handleWindowScroll = () => showScrollbar(document.documentElement);

    document.addEventListener("scroll", handleScroll, { capture: true, passive: true });
    window.addEventListener("scroll", handleWindowScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("scroll", handleWindowScroll);
      hideTimers.forEach((timer, scroller) => {
        window.clearTimeout(timer);
        scroller.classList.remove("is-scrolling");
      });
    };
  }, []);

  const go = (next: Page) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    go("detail");
  };
  const openArticle = (article: NewsArticle) => {
    setSelectedArticle(article);
    go("article-detail");
  };

  return (
    <>
      <Header page={page} go={go} />
      {page === "home" && <Home go={go} onOpenArticle={openArticle} />}
      {page === "products" && <Products go={go} onOpen={openProduct} />}
      {page === "news" && <News go={go} onOpenArticle={openArticle} />}
      {page === "weekly" && <WeeklyIndex go={go} />}
      {page === "weekly-detail" && <WeeklyDetail go={go} />}
      {page === "article-detail" && (
        <ArticleDetail go={go} article={selectedArticle} onOpenArticle={openArticle} />
      )}
      {page === "search" && <SearchPage onOpen={openProduct} />}
      {page === "detail" && <Detail go={go} product={selectedProduct} />}
    </>
  );
}
