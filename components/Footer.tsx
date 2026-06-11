export default function Footer() {
    const year = new Date().getFullYear();

    const socials = [
        { name: "GitHub", href: "https://github.com/GritsadaLeeyao" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/gritsada-leeyao-003729205/" },
        { name: "Email", href: "mailto:your-email@example.com" },
    ];

    return (
        <footer className="border-t">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
                <p className="text-sm text-muted-foreground">
                    © {year} Big.dev. All rights reserved.
                </p>

                <ul className="flex gap-6">
                    {socials.map((social) => (
                        <li key={social.name}>
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {social.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}