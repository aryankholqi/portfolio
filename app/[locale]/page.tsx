import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import About from '@/components/About';
import Stack from '@/components/Stack';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Now from '@/components/Now';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getContent } from '@/lib/content';
import { isLocale } from '@/lib/i18n';

export default async function Page({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const c = getContent(locale);

  return (
    <main>
      <Nav ui={c.ui} locale={locale} />
      <Hero ui={c.ui} links={c.links} />
      <Work ui={c.ui} projects={c.projects} />
      <About ui={c.ui} />
      <Stack ui={c.ui} stack={c.stack} />
      <Experience ui={c.ui} experience={c.experience} />
      <Education ui={c.ui} education={c.education} />
      <Now ui={c.ui} now={c.now} />
      <Contact ui={c.ui} links={c.links} />
      <Footer ui={c.ui} />
    </main>
  );
}
