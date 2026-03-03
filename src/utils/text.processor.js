function processText(input) {
  if (typeof input !== 'string') return '';

  let processed = input;
  processed = processed.replace(/''/g, "'");
  processed = processed.replace(
    /[\u{1F300}-\u{1FAFF}]/gu,
    ''
  );
  processed = processed.replace(/[!?.,]{2,}/g, '');

  processed = processed.replace(/\s+/g, ' ').trim();
  processed = processed.toLowerCase();
  processed = processed
    .replace(/\bi\b/g, 'I')
    .replace(/\bi'm\b/g, "I'm")
    .replace(/\bi've\b/g, "I've")
    .replace(/\bi'll\b/g, "I'll")
    .replace(/\bi'd\b/g, "I'd");
  processed = processed.replace(/[a-z]/, (match) => match.toUpperCase());

  return processed;
}

module.exports = { processText };
