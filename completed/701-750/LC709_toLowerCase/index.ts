const toLowerCaseTrivial = (s: string): string => s.toLowerCase();

function toLowerCase(s: string): string {
  const CHARCODE_DIFF = 32;
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);
    const isUpperCase = charCode >= 65 && charCode <= 90;
    const newCharCode = isUpperCase ? charCode + CHARCODE_DIFF : charCode;
    result += String.fromCharCode(newCharCode);
  }

  return result;
}
