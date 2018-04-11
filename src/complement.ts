export default function mirror(name: string): string {
  if (name.includes('_spec.')) {
    return name.replace(/_spec\./, '.');
  }

  const dot = name.lastIndexOf('.');

  if (dot !== -1) {
    return `${name.substring(0, dot)}_spec${name.substring(dot)}`;
  }

  return undefined;
}
