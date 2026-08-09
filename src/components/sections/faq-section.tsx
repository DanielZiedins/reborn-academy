import { FAQ_ITEMS } from "@/lib/seo";
import { Reveal } from "@/components/ui/reveal";

export function FaqSection() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-heading">
      <div className="page-width">
        <Reveal>
          <span className="eyebrow">Questions</span>
          <h2 id="faq-heading" className="display mt-4 text-[clamp(32px,5vw,52px)] text-white">
            About Reborn Academy
          </h2>
          <p className="mt-4 max-w-2xl text-[#999]">
            Clear answers for search, discovery, and anyone researching what Reborn Academy is and
            who it&apos;s for.
          </p>
        </Reveal>

        <dl className="faq-list mt-14">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={item.id} delay={i * 40}>
              <div className="faq-item">
                <dt id={`faq-${item.id}`} className="faq-question">
                  {item.question}
                </dt>
                <dd className="faq-answer">{item.answer}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
