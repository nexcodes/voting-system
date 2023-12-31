import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/providers";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function containsWord(string, word) {
  return string.includes(word);
}

const identifier = "";

export default async function RootLayout({ children }) {
  const user = await currentUser();

  const result = user.emailAddresses.some((email) => {
    return containsWord(email.emailAddress, identifier);
  });

  if (!result) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <div>
            <h1 className="text-4xl font-bold text-black">
              no estás autorizado a acceder al sitio web
            </h1>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
