# Contributing to ArcTimer

Thank you for contributing! This guide covers setup, conventions, and the PR process.

## Development Setup

```bash
# Clone
git clone https://github.com/toankhontech/arc-timer.git
cd arc-timer

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Start dev mode (watches for changes)
pnpm dev
```

## Project Structure

```
packages/
  core/          # @toankhontech/arctimer-core - shared logic, hooks, engine
  react/         # @toankhontech/arctimer-react - web component
  react-native/  # @toankhontech/arctimer-react-native - RN component
  expo/          # @toankhontech/arctimer-expo - Expo wrapper
  themes/        # @toankhontech/arctimer-themes - theme system
docs/            # Docusaurus documentation
examples/        # Example apps
```

## Development Workflow

1. **Fork** the repository
2. **Create a branch**: `git checkout -b feature/my-feature`
3. **Make changes** and add tests
4. **Run tests**: `pnpm test`
5. **Run type check**: `pnpm typecheck`
6. **Add a changeset**: `pnpm changeset`
7. **Commit** using conventional commits
8. **Push** and open a Pull Request

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add spring easing animation
fix: correct color interpolation at boundaries
docs: update theming guide
test: add TimerGroup sequential mode tests
chore: update dependencies
```

## Code Style

- TypeScript strict mode
- Prettier for formatting (`pnpm prettier --write .`)
- ESLint for linting
- No `any` types

## Testing

- All new features must have tests
- Maintain >= 90% code coverage
- Use `vitest` with `@testing-library/react`

## Adding a Changeset

Before submitting a PR, add a changeset:

```bash
pnpm changeset
```

Select the packages affected and describe the change. This generates a changelog entry.

## Pull Request Checklist

- [ ] Tests pass (`pnpm test`)
- [ ] TypeScript compiles (`pnpm typecheck`)
- [ ] Changeset added (`pnpm changeset`)
- [ ] Documentation updated (if applicable)
- [ ] No breaking changes (or marked as such)
