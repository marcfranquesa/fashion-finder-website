"use client";

export function LocaleSwitcher(props: { locale: string }) {
  return (
    <select
      className="text-black text-sm font-medium bg-white border border-gray-300 rounded-lg px-2 py-1"
      value={props.locale}
      onChange={(e) => {
        document.cookie = `locale=${e.target.value}; path=/`;
        location.reload();
      }}
    >
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="ca">Catalan</option>
    </select>
  );
}
