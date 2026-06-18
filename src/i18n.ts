import { useMemo } from "react";
import { useConfigStore } from "./stores/config";

export type Locale = "zh-CN" | "en";
export type LanguageSetting = Locale;

const translations = {
  "zh-CN": {
    appName: "AutoCorrect Desktop",
    common: {
      back: "← 返回",
      cancel: "取消",
      clear: "清空",
      close: "关闭",
      copy: "复制",
      detail: "详情",
      format: "格式化",
      history: "历史",
      loading: "加载中…",
      refresh: "刷新",
      reset: "重置",
      restore: "恢复",
      save: "保存",
      saving: "保存中…",
      settings: "设置",
    },
    format: {
      changed: "已修改",
      chars: "字符",
      clear: "清空",
      copy: "复制",
      formatShortcutMac: "⌘ + 回车 格式化",
      formatShortcutWindows: "Ctrl + 回车 格式化",
      nextDiff: "下一处改动",
      prevDiff: "上一处改动",
      embeddedEngine: "内置 autocorrect",
      emptyInput: "请输入需要格式化的文本",
      engineInstallBody: "本应用内置 autocorrect 格式化引擎，无需额外安装命令行工具。",
      engineInstallFallback: "请安装 autocorrect 以使用格式化功能。",
      engineInstallHint:
        "macOS: brew install huacnlee/tap/autocorrect\nWindows: scoop install autocorrect\n也可以通过 Cargo 安装: cargo install autocorrect",
      engineInstallTitle: "安装 AutoCorrect",
      engineMissing: "未安装",
      format: "格式化",
      formatting: "处理中…",
      gotIt: "知道了",
      input: "输入",
      inputPlaceholder: "粘贴或输入需要格式化的中文文本…",
      noChange: "无修改",
      output: "输出",
      outputPlaceholder: "格式化结果将在此显示",
      paste: "粘贴",
      pasteSuccess: "已粘贴剪贴板内容",
      pasteError: "无法读取剪贴板，请手动粘贴 (Ctrl+V / Cmd+V)",
      copySuccess: "已复制格式化结果",
      clearSuccess: "已清空输入与输出",
      formatSuccess: "格式化已完成",
      formatNoChangeToast: "格式化完成，内容无需修改",
      ready: "就绪",
      settings: "设置",
      history: "历史",
    },
    history: {
      clearConfirmBody: "确定要清空所有历史记录吗？此操作不可撤销。",
      clearConfirmTitle: "清空历史记录",
      clearConfirmAction: "确认清空",
      copied: "已复制",
      copyFailed: "复制失败",
      copiedOriginal: "原文已复制",
      copiedResult: "结果已复制",
      copyOriginal: "复制原文",
      copyResult: "复制结果",
      empty: "暂无历史记录",
      emptyHint: "格式化后的文本会自动记录在这里",
      entries: "条",
      historyTitle: "历史记录",
      noMatches: "没有匹配记录",
      original: "原文",
      result: "结果",
      restoreToMain: "恢复到主界面",
      searchPlaceholder: "搜索原文或结果",
      showAll: "显示全部",
      title: "历史详情",
      justNow: "刚刚",
      minutesAgo: "{{count}} 分钟前",
      hoursAgo: "{{count}} 小时前",
    },
    settings: {
      appearance: "外观",
      autocorrectDetected: "已自动检测到：{{path}}",
      autocorrectMissing: "未检测到 autocorrect，请安装或手动指定路径",
      autocorrectPath: "AutoCorrect 路径",
      autocorrectPathHint: "留空则自动检测",
      autocorrectPathPlaceholder: "未检测到",
      cancelRecording: "取消录制",
      clearCustomPath: "清除自定义路径，恢复自动检测",
      closeToTray: "关闭窗口时最小化到托盘",
      clickToRecord: "点击录制快捷键",
      escToCancel: "Esc 取消",
      formatEngine: "格式化引擎",
      formatRules: "格式化规则",
      formatter: "格式化",
      general: "通用",
      history: "历史记录",
      historyEnabled: "启用历史记录",
      historyLimit: "最大保留条数",
      embeddedEngine: "内置 autocorrect",
      language: "语言",
      languageZh: "简体中文",
      languageEn: "English",
      loading: "加载中…",
      pressShortcut: "按下新的组合键",
      record: "录制",
      recordHint: "点击后按下组合键录制",
      rerecord: "重新录制",
      reset: "重置",
      resetRules: "恢复默认规则",
      exampleBefore: "修改前",
      exampleAfter: "修改后",
      ruleFullwidth: "中文标点转全角",
      ruleFullwidthDesc: "将中文语境中的英文标点规范化为全角形式。",
      ruleHalfwidthPunctuation: "英文语境标点转半角",
      ruleHalfwidthPunctuationDesc: "将英文语境中的全角标点规范化为半角形式。",
      ruleHalfwidthWord: "全角字母和数字转半角",
      ruleHalfwidthWordDesc: "将全角英文字母和数字转换为半角形式，不包含全角标点。",
      ruleNoSpaceFullwidth: "清理全角标点旁空格",
      ruleNoSpaceFullwidthDesc: "移除全角标点相邻位置的冗余空格。",
      ruleNoSpaceFullwidthQuote: "清理全角引号旁空格",
      ruleNoSpaceFullwidthQuoteDesc: "移除全角引号相邻位置的冗余空格。",
      ruleSpaceBackticks: "反引号旁补空格",
      ruleSpaceBackticksDesc: "在反引号包裹的内容与相邻中文文本之间补充空格。",
      ruleSpaceBracket: "括号旁补空格",
      ruleSpaceBracketDesc: "在括号与相邻中文文本之间补充空格。",
      ruleSpaceDash: "连字符旁补空格",
      ruleSpaceDashDesc: "在连字符与相邻中文文本之间补充空格。",
      ruleSpaceDollar: "美元符号旁补空格",
      ruleSpaceDollarDesc: "在美元符号包裹的内容与相邻中文文本之间补充空格。",
      ruleSpacePunctuation: "标点符号旁补空格",
      ruleSpacePunctuationDesc: "在特定符号与相邻中文文本之间补充空格。",
      ruleSpaceWord: "中文与英文/数字间补空格",
      ruleSpaceWordDesc: "在中文文本与相邻英文或数字之间补充空格。",
      saved: "已保存",
      saveFailedShortcut: '快捷键 "{{shortcut}}" 注册失败，可能已被占用。',
      shortcutConflict: '快捷键 {{shortcut}} 与系统或其他应用冲突，请换一个组合键。',
      shortcut: "全局快捷键",
      diffHighlight: "高亮差异",
      theme: "主题",
      themeSystem: "跟随系统",
      themeLight: "浅色",
      themeDark: "深色",
    },
  },
  en: {
    appName: "AutoCorrect Desktop",
    common: {
      back: "← Back",
      cancel: "Cancel",
      clear: "Clear",
      close: "Close",
      copy: "Copy",
      detail: "Details",
      format: "Format",
      history: "History",
      loading: "Loading…",
      refresh: "Refresh",
      reset: "Reset",
      restore: "Restore",
      save: "Save",
      saving: "Saving…",
      settings: "Settings",
    },
    format: {
      changed: "Changed",
      chars: "chars",
      clear: "Clear",
      copy: "Copy",
      formatShortcutMac: "⌘ + Enter Format",
      formatShortcutWindows: "Ctrl + Enter Format",
      nextDiff: "Next change",
      prevDiff: "Previous change",
      embeddedEngine: "Embedded autocorrect",
      emptyInput: "Enter text to format",
      engineInstallBody: "This app bundles the autocorrect formatting engine. No external CLI is required.",
      engineInstallFallback: "Install autocorrect to use formatting.",
      engineInstallHint:
        "macOS: brew install huacnlee/tap/autocorrect\nWindows: scoop install autocorrect\nOr install with Cargo: cargo install autocorrect",
      engineInstallTitle: "Install AutoCorrect",
      engineMissing: "Not installed",
      format: "Format",
      formatting: "Formatting…",
      gotIt: "Got it",
      input: "Input",
      inputPlaceholder: "Paste or type Chinese text to format…",
      noChange: "No change",
      output: "Output",
      outputPlaceholder: "Formatted result will appear here",
      paste: "Paste",
      pasteSuccess: "Clipboard content pasted",
      pasteError: "Could not read clipboard. Paste manually with Ctrl+V / Cmd+V.",
      copySuccess: "Formatted result copied",
      clearSuccess: "Input and output cleared",
      formatSuccess: "Formatting completed",
      formatNoChangeToast: "Formatting completed with no changes",
      ready: "Ready",
      settings: "Settings",
      history: "History",
    },
    history: {
      clearConfirmBody: "Clear all history records? This action cannot be undone.",
      clearConfirmTitle: "Clear history",
      clearConfirmAction: "Clear history",
      copied: "Copied",
      copyFailed: "Copy failed",
      copiedOriginal: "Original copied",
      copiedResult: "Result copied",
      copyOriginal: "Copy original",
      copyResult: "Copy result",
      empty: "No history yet",
      emptyHint: "Changed formatting results will be saved here",
      entries: "items",
      historyTitle: "History",
      noMatches: "No matching records",
      original: "Original",
      result: "Result",
      restoreToMain: "Restore to editor",
      searchPlaceholder: "Search original or result",
      showAll: "Show all",
      title: "History details",
      justNow: "Just now",
      minutesAgo: "{{count}} min ago",
      hoursAgo: "{{count}} hr ago",
    },
    settings: {
      appearance: "Appearance",
      autocorrectDetected: "Detected: {{path}}",
      autocorrectMissing: "autocorrect was not detected. Install it or specify a path manually.",
      autocorrectPath: "AutoCorrect path",
      autocorrectPathHint: "Auto-detect when empty",
      autocorrectPathPlaceholder: "Not detected",
      cancelRecording: "Cancel recording",
      clearCustomPath: "Clear custom path and restore auto-detection",
      closeToTray: "Minimize to tray when closing the window",
      clickToRecord: "Click to record shortcut",
      escToCancel: "Esc to cancel",
      formatEngine: "Formatting engine",
      formatRules: "Formatting rules",
      formatter: "Formatter",
      general: "General",
      history: "History",
      historyEnabled: "Enable history",
      historyLimit: "Max entries",
      embeddedEngine: "Embedded autocorrect",
      language: "Language",
      languageZh: "简体中文",
      languageEn: "English",
      loading: "Loading…",
      pressShortcut: "Press a new shortcut",
      record: "Record",
      recordHint: "Click, then press a key combination",
      rerecord: "Record again",
      reset: "Reset",
      resetRules: "Restore default rules",
      exampleBefore: "Before",
      exampleAfter: "After",
      ruleFullwidth: "Convert Chinese punctuation to fullwidth",
      ruleFullwidthDesc: "Normalizes English punctuation to fullwidth form in Chinese contexts.",
      ruleHalfwidthPunctuation: "Convert punctuation to halfwidth in English",
      ruleHalfwidthPunctuationDesc: "Normalizes fullwidth punctuation to halfwidth form in English contexts.",
      ruleHalfwidthWord: "Convert fullwidth letters and numbers",
      ruleHalfwidthWordDesc: "Converts fullwidth Latin letters and numbers to halfwidth form without changing fullwidth punctuation.",
      ruleNoSpaceFullwidth: "Remove spaces around fullwidth punctuation",
      ruleNoSpaceFullwidthDesc: "Removes redundant spaces adjacent to fullwidth punctuation.",
      ruleNoSpaceFullwidthQuote: "Remove spaces around fullwidth quotes",
      ruleNoSpaceFullwidthQuoteDesc: "Removes redundant spaces adjacent to fullwidth quotation marks.",
      ruleSpaceBackticks: "Add spaces around backticks",
      ruleSpaceBackticksDesc: "Inserts spaces between backtick-delimited content and adjacent Chinese text.",
      ruleSpaceBracket: "Add spaces around brackets",
      ruleSpaceBracketDesc: "Inserts spaces between brackets and adjacent Chinese text.",
      ruleSpaceDash: "Add spaces around dashes",
      ruleSpaceDashDesc: "Inserts spaces between dashes and adjacent Chinese text.",
      ruleSpaceDollar: "Add spaces around dollar markers",
      ruleSpaceDollarDesc: "Inserts spaces between dollar-delimited content and adjacent Chinese text.",
      ruleSpacePunctuation: "Add spaces around punctuation",
      ruleSpacePunctuationDesc: "Inserts spaces between specific symbols and adjacent Chinese text.",
      ruleSpaceWord: "Add spaces between Chinese and Latin/numbers",
      ruleSpaceWordDesc: "Inserts spaces between Chinese text and adjacent Latin words or numbers.",
      saved: "Saved",
      saveFailedShortcut: 'Shortcut "{{shortcut}}" could not be registered. It may already be in use.',
      shortcutConflict: "Shortcut {{shortcut}} conflicts with the system or another app. Choose another combination.",
      shortcut: "Global shortcut",
      diffHighlight: "Highlight changes",
      theme: "Theme",
      themeSystem: "System",
      themeLight: "Light",
      themeDark: "Dark",
    },
  },
} as const;

type TranslationTree = typeof translations["zh-CN"];
type LeafPaths<T, Prefix extends string = ""> = {
  [K in keyof T]: T[K] extends string
    ? `${Prefix}${Extract<K, string>}`
    : LeafPaths<T[K], `${Prefix}${Extract<K, string>}.`>;
}[keyof T];

export type TranslationKey = LeafPaths<TranslationTree>;

export function useI18n() {
  const language = useConfigStore((state) => state.config?.language ?? "zh-CN");

  return useMemo(() => {
    const locale = resolveLocale(language);
    return {
      locale,
      language,
      t: (key: TranslationKey, vars?: Record<string, string | number>) =>
        translate(locale, key, vars),
    };
  }, [language]);
}

export function resolveLocale(language: string | undefined): Locale {
  return toSupportedLocale(language) ?? "zh-CN";
}

function toSupportedLocale(language: string | undefined): Locale | null {
  const normalized = language?.toLowerCase();
  if (!normalized || normalized === "system") return null;
  if (normalized.startsWith("zh")) return "zh-CN";
  if (normalized.startsWith("en")) return "en";
  return null;
}

function translate(
  locale: Locale,
  key: TranslationKey,
  vars?: Record<string, string | number>
): string {
  const value = key.split(".").reduce<unknown>((current, part) => {
    if (current && typeof current === "object" && part in current) {
      return (current as Record<string, unknown>)[part];
    }
    return undefined;
  }, translations[locale]);

  const template = typeof value === "string" ? value : key;
  if (!vars) return template;

  return Object.entries(vars).reduce(
    (text, [name, replacement]) =>
      text.replace(new RegExp(`{{${escapeRegExp(name)}}}`, "g"), String(replacement)),
    template
  );
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
