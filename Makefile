PNPM := pnpm
PNPM_EXEC := pnpm exec

.PHONY: install clean dev

install:
	$(PNPM) install

# Clean generated files.
clean:
	rm -rf ./dist ./node_modules

dev:
	$(PNPM_EXEC) vite
