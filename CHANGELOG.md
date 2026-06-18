# Changelog

All notable changes to this project will be documented in this file.

## 0.1.1 - 2026-06-18

### Changed

- Updated global shortcut documentation to match the app behavior: the shortcut restores and focuses the main window.

### Fixed

- Diff highlighting now shows deletion-only changes, including removed spaces from fullwidth punctuation cleanup.

### Removed

- Removed launch-at-login support and the related settings, permissions, and dependencies.

## 0.1.0 - 2026-06-18

### Added

- Initial AutoCorrect Desktop release for local Chinese text formatting.
- Bundled `autocorrect` Rust engine, so no external CLI installation is required.
- Split editor with input, formatted output, copy, paste, clear, and diff highlighting.
- Configurable formatting rules for Chinese/English spacing, punctuation width conversion, and fullwidth cleanup.
- Formatting history with search, restore, copy, and clear actions.
- Global clipboard formatting shortcut, system tray integration, launch at login, and close-to-tray behavior.
- Simplified Chinese and English UI, with Simplified Chinese as the default language.
