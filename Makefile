PNPM := pnpm
PNPM_EXEC := pnpm exec

.PHONY: install clean dev typecheck lint fix-lint check-format format build generate-api

install:
	$(PNPM) install

# Clean generated files.
clean:
	rm -rf ./dist ./node_modules

dev:
	$(PNPM_EXEC) vite

typecheck:
	$(PNPM_EXEC) tsc --build

lint:
	$(PNPM_EXEC) eslint './src/**/*.{ts,tsx}'

fix-lint:
	$(PNPM_EXEC) eslint './src/**/*.{ts,tsx}' --fix

check-format:
	$(PNPM_EXEC) prettier --check .

format:
	$(PNPM_EXEC) prettier --write .

build: typecheck
	$(PNPM_EXEC) vite build

# Generate api schema from openapi.yaml
# openapi.yaml をルートディレクトリにコピーしてから実行してください。設定はorval.config.jsを参照。
generate-api:
	$(PNPM_EXEC) orval
