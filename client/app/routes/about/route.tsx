import type { MetaFunction } from "@remix-run/node";
import Top from '~/components/top/top';

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function About() {


  return (
    <div>
      <Top/>

      <h1>About</h1>
    </div>
  );
}
