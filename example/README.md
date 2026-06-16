# Drizzle-Kit + Deno Example

This example demonstrates how to use **drizzle-kit** with **Deno** using the
`@hotsauce/drizzle-kit-deno-patch` patch.

## Setup

### 1. Install dependencies

```bash
deno install
```

### 2. Patch drizzle-kit

```bash
deno task patch
```

### 3. Generate migrations

```bash
deno task db:generate
```

### 4. Apply migrations

```bash
deno task db:migrate
```

## Testing local patch changes

`deno task patch` runs the **published** JSR version of the patcher
(`jsr:@hotsauce/drizzle-kit-deno-patch`). When you're iterating on this repo
and want to test your local working tree against the example, run `mod.ts`
directly instead:

```bash
deno run \
  --allow-read=./node_modules \
  --allow-write=./node_modules/.deno/drizzle-kit@0.31.10 \
  ../mod.ts
```

This uses the same permissions as `deno task patch` but skips the JSR
download, so any edits you make in `../scripts/patch-drizzle-kit.ts` take
effect immediately. Adjust the `drizzle-kit@<version>` segment to match the
version pinned in `deno.jsonc`.

## Files

- `deno.jsonc` - Deno configuration with tasks and permissions
- `drizzle.config.ts` - Drizzle configuration (uses PGlite for local dev)
- `schema.ts` - Example database schema

## How it works

The `deno task patch` command runs the `@hotsauce/drizzle-kit-deno-patch`
package, which patches drizzle-kit's bundled `bin.cjs` file for Deno
compatibility.

After patching, you can run drizzle-kit commands using the permission set
defined in `deno.jsonc`:

```bash
deno run --permission-set=drizzle-kit ./node_modules/drizzle-kit/bin.cjs generate
```

The tasks in `deno.jsonc` wrap these commands for convenience.
