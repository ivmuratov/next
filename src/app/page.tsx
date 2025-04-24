import { Page } from "@/containers";
import { Fragment } from "react";

export default function Home() {
  return (
    <Page>
      {new Array(50).fill("*").map((_, index) => (
        <Fragment key={index}>
          123
          <br />
        </Fragment>
      ))}
    </Page>
  );
}
