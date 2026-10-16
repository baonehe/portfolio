const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Escapes text and wraps every [placeholder] segment in a highlight span. */
export function ph(text: string): string {
  return escape(text).replace(/\[([^\]]+)\]/g, '<span class="ph">[$1]</span>');
}

/** Strips placeholder brackets, for attributes like alt text and titles. */
export function plain(text: string): string {
  return text.replace(/\[([^\]]+)\]/g, '$1');
}
