import { useRouter } from "next/router";
import { useIntl, FormattedMessage } from "react-intl";

export default function Section({ dir }) {
  //   const { locales } = useRouter();
  //   const intl = useIntl();

  //   const title = intl.formatMessage({ id: "section.header" });
  //   const description = intl.formatMessage({ id: "section.discription" });

  return (
    <div>
      <h1>
        <FormattedMessage
          id="section.header"
          values={{ b: (info) => <b>{info}</b> }}
        />
      </h1>
      <p>
        <FormattedMessage id="section.description" />
      </p>
    </div>
  );
}
