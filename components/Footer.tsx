import { socialLinks, siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {year} {siteConfig.name}. All rights reserved.
        </p>

        <ul className="flex gap-6">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                {...(social.label !== "Email"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
