.PHONY: install clean build test

# Default target
all: install build

# Install dependencies
install:
	npm ci

# Clean build artifacts and node_modules
clean:
	rm -rf dist node_modules

# Build the project
build: install
	npm run build

# Run tests
test: install
	npm test

# Publish the package
publish: build
	npm publish --access private

# Serve the project (for development purposes)
serve: install
	npm run serve
