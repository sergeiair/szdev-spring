import type { MetaFunction } from "@remix-run/node";
import PublicPageSkeleton from '~/components/skeletons/public/public-page-skeleton';
import React from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: "Privacy policy" },
    { name: "description", content: "szdev.cc privacy and terms" },
  ];
};

export default function TOCPage() {


  return (
    <PublicPageSkeleton>

      <h1>Terms of use</h1>

      <div className={'p-6 py'}>
        <p>
          Welcome to szdev.cc! By accessing and using our website, you agree to comply with and be bound by the following terms of use. If you do not agree with these terms, please refrain from using our site.
        </p>

        <p>
          Content Ownership: All articles, software engineering resources, and other content on szdev.cc are the property of szdev.cc and its contributors unless otherwise stated. Unauthorized use, reproduction, or distribution is strictly prohibited.
        </p>

        <p>
          Use as Is: The content provided on szdev.cc is for informational purposes only. We make no warranties or guarantees regarding the accuracy, completeness, or suitability of the information. Use the content at your own risk.
        </p>

        <p>
          Cookies and Analytics: szdev.cc does not use cookies to collect personal information. However, we may utilize analytics services to gather general information about user interactions with the site. This information is used to improve the user experience and does not include personally identifiable details.
        </p>

        <p>
          Third-Party Links: szdev.cc may contain links to third-party websites. We do not endorse or take responsibility for the content, products, or services offered by these external sites. Users access them at their own discretion.
        </p>

        <p>
          Privacy Policy: Our Privacy Policy outlines how we collect, use, and protect your personal information. By using szdev.cc, you agree to the terms outlined in our Privacy Policy.
        </p>

        <p>
          Changes to Terms: szdev.cc reserves the right to modify or update these terms of use at any time. It is the responsibility of users to regularly review these terms. Continued use of the site after changes implies acceptance of the modified terms.
        </p>

        <p>
          Termination of Service: szdev.cc reserves the right to terminate or suspend services, in whole or in part, at our discretion, without prior notice. We are not liable for any consequences resulting from the termination of services.
        </p>

        <p>
          Contact Information: If you have any questions or concerns regarding these terms of use, please contact me at szdevcc@gmail.com.
        </p>

        <p>
          Thank you for using szdev.cc!
        </p>
      </div>
    </PublicPageSkeleton>
  );
}
