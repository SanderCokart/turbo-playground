# Tubrorepo + shadcn-ui + next-intl + zod + react-hook-form

## Quick Start

```bash
pnpm install && pnpm dev -filter web
```

## What is this?

This is an example repository using TurboRepo to manage multiple packages in a monorepo. It uses the basic TurboRepo
example and builds on top of it and example of how to combine TurboRepo with other libraries like shadcn-ui, next-intl,
zod, and react-hook-form.

## Special thanks

Special thanks to [gcascio](https://github.com/gcascio) for
his [next-intl-zod](https://github.com/gcascio/next-intl-zod) implementation based
on [zod-i18n](https://github.com/aiji42/zod-i18n) by [aiji42](https://github.com/aiji42).

## Making of

### Initial setup

I started with `pnpm create turbo` to create a basic turbo repo and started adding in tailwind and shadcn-ui.

shadcn-ui could not find the framework with `pnpm dlx shadcn@latest init` so I needed to manually install it.
I followed the instructions on the [shadcn-ui manual installation](https://ui.shadcn.com/docs/installation/manual) page.

I did run into issues with importing the css from `@repo/ui` in the `web` app. I had to add postcss and thus
autoprefixer to the `web` app.
It had to be in this order:

```js
// web/postcss.config.js
module.exports = {
    plugins: {
        "postcss-import": {},
        tailwindcss: {},
        autoprefixer: {},
    },
};
```

and then in the web/src/app/globals.css:

```css
@import "@repo/ui/src/themes/default.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now for some reason importing after using @tailwind breaks the app. In an app I made for the organisation I work for
this did work properly however and also using the exports clock of package.json but it must have something to do with
module resolution and postcss.

Another thing I changed from shadcn-ui is the use of font-sans by default and activating anti-aliasing as you can see in
default.css.

```css
@layer base {
    * {
        @apply border-border;
    }

    body {
        @apply bg-background text-foreground font-sans antialiased;
        font-feature-settings: "rlig" 1, "calt" 1;
    }
}
```

### Forms

Once the themes were loading and components started working I added in a form.
Using `pnpm dlx shadcn@latest add form` from the `packages/ui` directory and I added the form components from shadcn to
the ui package into `src/components/ui`.

I created a simple example-form page with a reusable form component that uses react-hook-form and zod for validation.

One thing that does suck however is that zod only fires "input required" errors when the values are `undefined`.
So if in default values you set a value to an empty string it will not fire the
`z.string({required_error: "Name is required"}` error. This is a bit annoying but
So when settings default values realize that `undefined` is a totally valid value. Also know that when using the
`form.handleSubmit` the data that comes from it cannot be `undefined` unless `z.partial` or `z.optional` is used.

### About zod

Zod is great when using it for a single language but once you go multi-language it becomes alarmingly more difficult to
satisfy user experience.

#### Pros

- Easy to use
- Great developer experience (as long as you avoid multi-language)
- Build with TypeScript in mind

#### Cons

- Horrible end user error messages (users do not need to see things such as type names such as `string` or `array` these
  are super confusing to them)
- No build-in multi-language support like for example `yup-locales`.
- The error map while typesafe is difficult to navigate and understand.

#### Overall

Thanks to legends like [aiji42](https://github.com/aiji42) and [gcascio](https://github/gcascio) we all rest a bit
easier at night knowing that we can use zod in our projects with great i18n support provided you are willing to adapt a
tiny bit.

### WORK IN PROGRESS