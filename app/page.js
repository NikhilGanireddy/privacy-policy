import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24 gap-12">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Session Share - thegdp</h1>
        <h2 className="text-sm">Effective Date: May 31, 2024</h2>
      </div>
      <p className="text-left  w-full">
      Thank you for choosing to use Session Share - thegdp. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our Chrome extension.
      </p>
      <div className="gap-4 w-full flex justify-center items-center flex-col text-left">
        <h1 className="w-full font-bold">Information We Collect:</h1>
        <p className="text-left w-full">
        <b>Cookies and Session Data:</b> The only data we collect from our users is the cookie information and session data necessary to enable the sharing of browser sessions across multiple devices. We do not collect any personal information beyond what is necessary for the functionality of the extension.
      </p>
      </div>
      <div className="gap-4 w-full flex justify-center items-center flex-col text-left">
        <h1 className="w-full font-bold">Use of Information:</h1>
        <p className="text-left w-full">
        The information we collect is solely used to facilitate the sharing of your browser sessions across devices. It enables seamless access to your sessions, improving your workflow and interaction with platforms such as Chegg and TutorBin.
      </p>
      </div>
      <div className="gap-4 w-full flex justify-center items-center flex-col text-left">
        <h1 className="w-full font-bold">Protection of Information:</h1>
        <p className="text-left w-full">
        We implement a variety of security measures to maintain the safety of your session information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
      </p>
      </div>
      <div className="gap-4 w-full flex justify-center items-center flex-col text-left">
        <h1 className="w-full font-bold">Sharing of Information:</h1>
        <p className="text-left w-full">
        We do not sell, trade, or otherwise transfer to outside parties your session information. This does not include trusted third parties who assist us in operating our extension, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
      </p>
      </div>
      <div className="gap-4 w-full flex justify-center items-center flex-col text-left">
        <h1 className="w-full font-bold">Your Consent:</h1>
        <p className="text-left w-full">
        By using our extension, you consent to our privacy policy.
      </p>
      </div>
      <div className="gap-4 w-full flex justify-center items-center flex-col text-left">
        <h1 className="w-full font-bold">Changes to our Privacy Policy:</h1>
        <p className="text-left w-full">
        Any changes we may make to our privacy policy in the future will be posted on this page. If we make material changes to how we treat our users&apos; personal information, we will notify you through a notice on the extension and/or by email.
      </p>
      </div>
      <div className="gap-4 w-full flex justify-center items-center flex-col text-left">
        <h1 className="w-full font-bold">Contact Us:</h1>
        <p className="text-left w-full">
        If you have any questions regarding this privacy policy, you may contact us using the information below:
      </p>
      <Link className="text-red-500 w-full text-left" href={"https://nikhilganireddy.vercel.app/contact"}>Contact Page</Link>
      </div>
    </main>
  );
}
