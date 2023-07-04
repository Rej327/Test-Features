import { useRouter } from "next/router";
import { useIntl, FormattedMessage } from "react-intl";

export default function OtherPage({ dir }) {
  //   const { locales } = useRouter();
  //   const intl = useIntl();

  //   const title = intl.formatMessage({ id: "section.header" });
  //   const description = intl.formatMessage({ id: "section.discription" });

  return (
    <div>
      <h1>
        <FormattedMessage
          id="other.page"
          values={{ b: (info) => <b>{info}</b> }}
        />
      </h1>
      <p>
        <FormattedMessage id="other.page.description" />
      </p>
    </div>
  );
}
