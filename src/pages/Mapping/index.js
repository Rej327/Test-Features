import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Mapping from "../../../components/Mapping";
import Nav from "../../../components/Nav";

export default function Home({ dir }) {
  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "title" });
  const description = intl.formatMessage({ id: "description" });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale" />
        <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
        <link rel="icon" href="/favicon.ico" hrefLang="en" />
        <link rel="icon" href="/favicon.ico" hrefLang="tag" />
      </Head>
      <header>
        <div>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              <div>{locale}</div>
            </Link>
          ))}
        </div>
      </header>
      <main className="text-2xl">
        <Nav />
        <div className="text-4xl my-10 mx-auto text-center">
          <Mapping />
        </div>
      </main>
    </>
  );
}
