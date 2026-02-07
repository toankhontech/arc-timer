# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.x.x  | Yes       |
| 0.x.x  | Yes (beta)|

## Reporting a Vulnerability

If you discover a security vulnerability, please report it responsibly:

1. **Do NOT** open a public issue
2. Email the details to the maintainers
3. Include steps to reproduce the vulnerability
4. Allow reasonable time for a fix before public disclosure

We will acknowledge your report within 48 hours and provide a timeline for a fix.

## Security Best Practices

ArcTimer follows these security practices:

- No `eval()` or `new Function()` usage
- No direct DOM manipulation outside React
- All dependencies are regularly audited (`pnpm audit`)
- Strict TypeScript mode prevents common errors
- Automated dependency updates via Dependabot
