import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <div className="eyebrow">404</div>
      <h1 className="h2">
        Page <span className="grad">not found</span>
      </h1>
      <p className="section-sub" style={{ textAlign: "center" }}>
        The page you are looking for does not exist. / Страница не найдена.
      </p>
      <Link href="/" className="glass-btn" style={{ marginTop: 32 }}>
        <span className="glass-ring-shine" />
        Back home / На главную
      </Link>
    </section>
  );
}
