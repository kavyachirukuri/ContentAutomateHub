import Link from "next/link";
import { Button } from "@/components/Button";

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <>
      <section className="bg-[#0c0f14] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Link
            href="/case-studies"
            className="text-sm font-medium text-[#d4af37] hover:underline"
          >
            ← Case Studies
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Case Study #{id}
          </h1>
          <p className="mt-2 text-gray-400">
            CMS-ready. Connect your headless CMS to serve full case study
            content here.
          </p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-gray-600">
            This is a placeholder for the full case study. Replace with content
            from your CMS or static data.
          </p>
          <div className="mt-8">
            <Button href="/case-studies">Back to Case Studies</Button>
          </div>
        </div>
      </section>
    </>
  );
}
