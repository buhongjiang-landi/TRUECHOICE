import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const products = [
  {
    id: 1,
    name: "Air Zoom Demo Runner",
    brand: "Nike",
    cat: "Running Shoes",
    price: 169,
    emoji: "👟",
    labour: 78,
    supply: 65,
    environment: 82,
    transparency: 70,
    confidence: "High",
  },
  {
    id: 2,
    name: "Ultraboost Demo",
    brand: "adidas",
    cat: "Running Shoes",
    price: 159,
    emoji: "👟",
    labour: 74,
    supply: 72,
    environment: 76,
    transparency: 83,
    confidence: "High",
  },
  {
    id: 3,
    name: "Gel Demo Runner",
    brand: "ASICS",
    cat: "Running Shoes",
    price: 179,
    emoji: "👟",
    labour: 81,
    supply: 75,
    environment: 79,
    transparency: 77,
    confidence: "High",
  },
  {
    id: 4,
    name: "Demo Smartphone X",
    brand: "Example Tech",
    cat: "Electronics",
    price: 699,
    emoji: "📱",
    labour: 70,
    supply: 62,
    environment: 68,
    transparency: 74,
    confidence: "Medium",
  },
  {
    id: 5,
    name: "Demo Everyday Jacket",
    brand: "Example Wear",
    cat: "Clothing",
    price: 119,
    emoji: "👕",
    labour: 66,
    supply: 61,
    environment: 72,
    transparency: 69,
    confidence: "Medium",
  },
  {
    id: 6,
    name: "Demo Home Coffee Maker",
    brand: "Example Home",
    cat: "Home",
    price: 129,
    emoji: "☕",
    labour: 73,
    supply: 68,
    environment: 70,
    transparency: 76,
    confidence: "Low",
  },
];

const evidence = {
  Nike: [
    {
      issue: "Worker safety",
      status: "Company-reported",
      evidenceType: "Company disclosure",
      source: "NIKE, Inc. — Responsible Supply Chain / Health and Safety",
      date: "FY2025",
      whatWeKnow:
        "NIKE reports that all strategic suppliers reached its requirement for building healthy and safe workplaces in FY2025. NIKE also reports that its Culture of Safety programme covered 106 Tier 1 factories and more than 650,000 workers.",
      whatWeDoNotKnow:
        "These figures are company-reported and do not independently establish working conditions for every worker or every supplier facility."
    },
    {
      issue: "Labour and human rights standards",
      status: "Company-reported",
      evidenceType: "Company disclosure",
      source: "NIKE, Inc. — Responsible Supply Chain",
      date: "FY2025",
      whatWeKnow:
        "NIKE states that suppliers are measured against minimum standards covering labour, health and safety, and environmental impact. NIKE also states that its approach is informed by ILO principles, the UN Guiding Principles and OECD guidelines.",
      whatWeDoNotKnow:
        "Public company reporting does not by itself establish that every supplier consistently meets these standards at all times."
    },
    {
      issue: "Worker voice and engagement",
      status: "Company-reported",
      evidenceType: "Company disclosure",
      source: "NIKE, Inc. — Responsible Supply Chain / Health and Safety",
      date: "FY2025",
      whatWeKnow:
        "NIKE reports that strategic suppliers work on worker engagement and worker voice, and that its safety maturity assessment includes worker feedback through a third-party administered Safety Perception Survey.",
      whatWeDoNotKnow:
        "The public information does not provide a complete independent assessment of worker experience across the entire supply chain."
    }
  ],

  adidas: [
    {
      issue: "Worker health and safety",
      status: "Company-reported",
      evidenceType: "Company disclosure",
      source: "adidas Annual Report 2025 — Workers in the Value Chain",
      date: "2025",
      whatWeKnow:
        "adidas reports health and safety as a material worker issue and describes safety programmes, supplier assessments, worker feedback and remediation activities across its upstream value chain.",
      whatWeDoNotKnow:
        "adidas also reports that health and safety breaches occurred during the reporting period, so company policies and monitoring systems do not mean that all suppliers always meet the required standards."
    },
    {
      issue: "Wages and working conditions",
      status: "Company-reported",
      evidenceType: "Company disclosure",
      source: "adidas Annual Report 2025 — Workers in the Value Chain",
      date: "2025",
      whatWeKnow:
        "adidas identifies fair wages, working hours, secure employment and social dialogue as material worker issues and reports actions intended to address these risks.",
      whatWeDoNotKnow:
        "The public reporting does not establish that all workers throughout every tier of the value chain receive adequate wages or experience the same working conditions."
    },
    {
      issue: "Child labour and forced labour",
      status: "Company-reported",
      evidenceType: "Company disclosure",
      source: "adidas Annual Report 2025 — Human Rights and Environmental Due Diligence",
      date: "2025",
      whatWeKnow:
        "adidas identifies child labour and forced labour as human-rights risks and reports programmes addressing these risks in its upstream supply chain.",
      whatWeDoNotKnow:
        "The existence of policies, risk assessments and programmes does not independently prove that child or forced labour is absent from every part of the supply chain."
    },
    {
      issue: "Freedom of association",
      status: "Company-reported",
      evidenceType: "Company disclosure",
      source: "adidas Annual Report 2025 — Workers in the Value Chain",
      date: "2025",
      whatWeKnow:
        "adidas reports processes for worker engagement, worker representatives, trade unions and grievance mechanisms in its upstream supply chain.",
      whatWeDoNotKnow:
        "Public reporting does not independently establish the effectiveness of freedom-of-association protections at every supplier facility."
    }
  ],

  ASICS: [
    {
      issue: "Human rights in the supply chain",
      status: "Company-reported",
      evidenceType: "Company disclosure",
      source: "ASICS — Human Rights and Transparency in the Supply Chain",
      date: "2025",
      whatWeKnow:
        "ASICS states that it seeks to respect human rights throughout its supply chain and uses a supply-chain management programme to maintain and improve standards.",
      whatWeDoNotKnow:
        "Company policies and management programmes do not independently establish conditions for every worker or supplier."
    },
    {
      issue: "Supplier standards and compliance",
      status: "Company-reported",
      evidenceType: "Company disclosure",
      source: "ASICS Sustainability Report 2025",
      date: "2025",
      whatWeKnow:
        "ASICS reported 100% supplier compliance with its standards in its 2025 Sustainability Report and identifies Tier 1 and key Tier 2 supplier standards as part of its supply-chain approach.",
      whatWeDoNotKnow:
        "This is an ASICS-reported compliance figure. The public disclosure does not by itself provide independent verification of every supplier's working conditions."
    },
    {
      issue: "Forced labour",
      status: "Company-reported",
      evidenceType: "Company disclosure",
      source: "ASICS — Human Rights and Transparency in the Supply Chain",
      date: "2025",
      whatWeKnow:
        "ASICS states that it strongly condemns forced or involuntary labour and describes supply-chain management and due-diligence processes intended to address this risk.",
      whatWeDoNotKnow:
        "A policy against forced labour does not independently establish that forced labour is absent from every supplier or lower-tier source."
    },
    {
      issue: "Supply-chain transparency",
      status: "Company-reported",
      evidenceType: "Company disclosure",
      source: "ASICS — Human Rights and Transparency in the Supply Chain",
      date: "2025",
      whatWeKnow:
        "ASICS states that it is working to strengthen traceability and risk analytics and to expand human-rights risk management into Tier 2 suppliers.",
      whatWeDoNotKnow:
        "The public information does not provide complete visibility into every tier, facility and material source."
    }
  ]
};

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      category === "All" || p.cat === category;

    const q = searchText.toLowerCase().trim();

    const matchesSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.cat.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <header className="site-header">
        <div className="nav">
          <div>
            <div className="logo">TRUECHOICE</div>
            <div className="tag">Know where your money goes.</div>
          </div>

          <nav>
            <button onClick={() => go("home")}>Home</button>
            <button onClick={() => go("shop")}>Shop</button>
            <button onClick={() => go("brands")}>Brands</button>
            <button onClick={() => go("evidence")}>Evidence</button>
            <button onClick={() => go("how")}>How it works</button>
          </nav>

          <button className="cart-button" onClick={() => go("cart")}>
            🛒 Cart {cart.length > 0 && `(${cart.length})`}
          </button>
        </div>
      </header>

      <main className="container">

        {page === "home" && (
          <>
            <section className="hero">
              <div className="eyebrow">THE INFORMED SHOPPING PLATFORM</div>

              <h1>Know what your money supports.</h1>

              <p>
                Search products, compare the companies behind them,
                explore the evidence, and decide what matters to you.
              </p>

              <div className="search-box">
                <input
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search products or brands — e.g. Nike"
                />

                <button
                  className="primary"
                  onClick={() => go("shop")}
                >
                  Search
                </button>
              </div>

              <div className="notice">
                DEMO PLATFORM — Products, prices and scores are
                illustrative prototype data. No real transaction is processed.
              </div>
            </section>

            <section className="section">
              <h2>What matters to you?</h2>

              <div className="priority-grid">
                <div className="priority-card featured">
                  <div className="priority-icon">👷</div>
                  <h3>Labour & Workers</h3>
                  <p>
                    Worker rights, working conditions, safety,
                    forced labour and documented labour issues.
                  </p>
                  <button
                    onClick={() => {
                      setCategory("All");
                      setSearchText("");
                      go("evidence");
                    }}
                  >
                    Explore labour evidence →
                  </button>
                </div>

                <div className="priority-card">
                  <div className="priority-icon">🔗</div>
                  <h3>Supply Chain</h3>
                  <p>
                    Supplier visibility, sourcing standards,
                    traceability and supply-chain information.
                  </p>
                </div>

                <div className="priority-card">
                  <div className="priority-icon">🌱</div>
                  <h3>Environment</h3>
                  <p>
                    Environmental policies, impacts, targets
                    and relevant compliance information.
                  </p>
                </div>

                <div className="priority-card">
                  <div className="priority-icon">📊</div>
                  <h3>Transparency</h3>
                  <p>
                    Disclosure, reporting quality, traceability
                    and the strength of available evidence.
                  </p>
                </div>
              </div>
            </section>

            <section className="section">
              <div className="section-heading">
                <h2>Featured products</h2>
                <button
                  className="secondary"
                  onClick={() => go("shop")}
                >
                  View all
                </button>
              </div>

              <div className="product-grid">
                {products.slice(0, 4).map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onOpen={openProduct}
                  />
                ))}
              </div>
            </section>
          </>
        )}

        {page === "shop" && (
          <section className="page">
            <div className="eyebrow">SHOP</div>

            <h1>Products</h1>

            <p className="muted">
              Compare products and the companies behind them.
            </p>

            <div className="search-box">
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search Nike, running shoes, smartphone..."
              />
            </div>

            <div className="filters">
              {[
                "All",
                "Running Shoes",
                "Electronics",
                "Clothing",
                "Home",
              ].map((c) => (
                <button
                  key={c}
                  className={category === c ? "filter active" : "filter"}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="product-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onOpen={openProduct}
                  />
                ))
              ) : (
                <div className="notice">
                  No demo products found. Try Nike,
                  adidas, ASICS or running shoes.
                </div>
              )}
            </div>
          </section>
        )}

        {page === "product" && selectedProduct && (
          <section className="page">
            <button className="back" onClick={() => go("shop")}>
              ← Back to shop
            </button>

            <div className="product-detail">
              <div className="big-product">
                {selectedProduct.emoji}
              </div>

              <div>
                <div className="eyebrow">
                  {selectedProduct.cat}
                </div>

                <h1>{selectedProduct.name}</h1>

                <p className="muted">
                  {selectedProduct.brand}
                </p>

                <div className="price">
                  NZ${selectedProduct.price}
                </div>

                <div className="notice">
                  Demo product. No real purchase is processed.
                </div>

                <div className="score-grid">
                  <Score
                    title="Labour & Workers"
                    value={selectedProduct.labour}
                  />

                  <Score
                    title="Supply Chain"
                    value={selectedProduct.supply}
                  />

                  <Score
                    title="Environment"
                    value={selectedProduct.environment}
                  />

                  <Score
                    title="Transparency"
                    value={selectedProduct.transparency}
                  />
                </div>

                <p>
                  <span className="badge">
                    Information confidence: {selectedProduct.confidence}
                  </span>
                </p>

                <button
                  className="primary"
                  onClick={() => addToCart(selectedProduct)}
                >
                  Add to demo cart
                </button>

                <button
                  className="secondary"
                  onClick={() => openBrand(selectedProduct.brand)}
                >
                  View company & evidence
                </button>

                <div className="card">
                  <h3>Why this information matters</h3>
                  <p className="muted">
                    TRUECHOICE separates company claims,
                    independent evidence and unknowns.
                    Prototype scores are illustrative only.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {page === "brands" && (
          <section className="page">
            <div className="eyebrow">BRANDS & COMPANIES</div>

            <h1>Explore companies</h1>

            <p className="muted">
              Profiles combine company information with evidence.
            </p>

            <div className="brand-grid">
              {["Nike", "adidas", "ASICS"].map((brand) => (
                <div className="card" key={brand}>
                  <span className="badge">Demo research</span>

                  <h2>{brand}</h2>

                  <p className="muted">
                    Sportswear · Supply chain · Labour · Environment
                  </p>

                  <button
                    className="primary"
                    onClick={() => openBrand(brand)}
                  >
                    View company
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {page === "brand" && selectedBrand && (
          <section className="page">
            <button
              className="back"
              onClick={() => go("brands")}
            >
              ← Back to brands
            </button>

            <div className="company-head">
              <div>
                <div className="eyebrow">COMPANY PROFILE</div>

                <h1>{selectedBrand}</h1>

                <p className="muted">
                  Research sample · Last reviewed September 2026
                </p>
              </div>

              <span className="badge">
                Evidence available
              </span>
            </div>

            <div className="notice">
              This is a research prototype. Evidence shown here
              is intended to demonstrate how TRUECHOICE could work.
            </div>

            <div className="two-column">
              <div>
                <h2>Evidence Explorer</h2>

                {(evidence[selectedBrand] || []).map(
                  (item, index) => (
                    <div className="evidence-card" key={index}>
                      <div
                        className={
                          item[0] === "Open question"
                            ? "evidence-label unknown"
                            : "evidence-label"
                        }
                      >
                        {item[0]}
                      </div>

                      <h3>{item[1]}</h3>

                      <div className="source">
                        Source: {item[2]}
                      </div>
                    </div>
                  )
                )}
              </div>

              <div>
                <div className="card">
                  <h3>What we know</h3>

                  <p className="muted">
                    Public evidence can describe policies,
                    systems and reported outcomes.
                  </p>

                  <h3>What we do not know</h3>

                  <p className="muted">
                    Public evidence cannot automatically establish
                    conditions everywhere in a global supply chain.
                  </p>

                  <h3>AI's role</h3>

                  <p className="muted">
                    Find, classify and summarize information.
                    Human review checks whether evidence supports
                    the conclusion.
                  </p>
                </div>

                <div className="card">
                  <h3>Important principle</h3>

                  <p className="muted">
                    Missing evidence is not automatically proof
                    of wrongdoing.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {page === "evidence" && (
          <section className="page">
            <div className="eyebrow">EVIDENCE EXPLORER</div>

            <h1>Evidence before opinion.</h1>

            <p className="muted">
              TRUECHOICE is designed to show what is known,
              what is claimed, and what remains uncertain.
            </p>

            <div className="priority-grid">
              <div className="priority-card featured">
                <div className="priority-icon">👷</div>

                <h2>Labour & Workers</h2>

                <p>
                  Worker rights, labour standards, workplace
                  safety, forced labour, child labour,
                  worker representation and documented issues.
                </p>

                <button
                  onClick={() => openBrand("Nike")}
                >
                  See example evidence →
                </button>
              </div>

              <div className="priority-card">
                <h2>Evidence confidence</h2>

                <p>
                  High / Medium / Low / Unknown should be
                  separate from any score.
                </p>
              </div>

              <div className="priority-card">
                <h2>Source trail</h2>

                <p>
                  Every important claim should have a source,
                  date and explanation of what the source actually supports.
                </p>
              </div>
            </div>

            <div className="notice">
              Important: “No evidence of wrongdoing” is not
              the same as proof that no wrongdoing exists.
            </div>
          </section>
        )}

        {page === "how" && (
          <section className="page">
            <div className="eyebrow">HOW TRUECHOICE WORKS</div>

            <h1>Information first. Shopping second.</h1>

            <div className="steps">
              <div className="card">
                <span className="step">01</span>
                <h2>Search</h2>
                <p className="muted">
                  Find a product or company.
                </p>
              </div>

              <div className="card">
                <span className="step">02</span>
                <h2>Compare</h2>
                <p className="muted">
                  Compare labour, supply chain,
                  environment and transparency information.
                </p>
              </div>

              <div className="card">
                <span className="step">03</span>
                <h2>Verify</h2>
                <p className="muted">
                  Open the evidence and source information.
                </p>
              </div>

              <div className="card">
                <span className="step">04</span>
                <h2>Choose</h2>
                <p className="muted">
                  You decide what matters to you.
                </p>
              </div>
            </div>

            <div className="card methodology">
              <h2>Core methodology areas</h2>

              <ul>
                <li>
                  <strong>Labour & Workers</strong> — worker
                  rights and working conditions.
                </li>
                <li>
                  <strong>Supply Chain</strong> — supplier
                  visibility and traceability.
                </li>
                <li>
                  <strong>Environment</strong> — environmental
                  policies and impacts.
                </li>
                <li>
                  <strong>Transparency</strong> — disclosure,
                  reporting and source quality.
                </li>
                <li>
                  <strong>Evidence confidence</strong> —
                  High / Medium / Low / Unknown.
                </li>
              </ul>
            </div>
          </section>
        )}

        {page === "cart" && (
          <section className="page">
            <div className="eyebrow">DEMO CART</div>

            <h1>Your cart</h1>

            <div className="card">
              {cart.length === 0 ? (
                <p className="muted">
                  Your demo cart is empty.
                </p>
              ) : (
                <>
                  {cart.map((p, index) => (
                    <div className="cart-item" key={index}>
                      <strong>{p.name}</strong>
                      <span>
                        {p.brand} · NZ${p.price}
                      </span>
                    </div>
                  ))}

                  <div className="notice">
                    Demo checkout only. No payment or real order
                    will be processed.
                  </div>

                  <button
                    className="primary"
                    onClick={() =>
                      alert(
                        "Demo checkout — no real transaction."
                      )
                    }
                  >
                    Proceed to demo checkout
                  </button>
                </>
              )}
            </div>
          </section>
        )}
      </main>

      <footer>
        <strong>TRUECHOICE™</strong>
        <span>Information first. You make the choice.</span>
      </footer>
    </>
  );
}

function ProductCard({ product, onOpen }) {
  return (
    <div className="card product-card">
      <div className="product-image">
        {product.emoji}
      </div>

      <span className="badge">{product.cat}</span>

      <h3>{product.name}</h3>

      <p className="muted">{product.brand}</p>

      <div className="product-row">
        <strong>NZ${product.price}</strong>

        <span className="badge">
          {product.confidence} evidence
        </span>
      </div>

      <button
        className="primary"
        onClick={() => onOpen(product)}
      >
        View product
      </button>
    </div>
  );
}

function Score({ title, value }) {
  return (
    <div className="score-box">
      <div className="muted">{title}</div>

      <div className="score-number">
        {value}
      </div>

      <div className="score-bar">
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
