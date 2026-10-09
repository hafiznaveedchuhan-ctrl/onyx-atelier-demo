const credits = [
  ['Honey onyx close-up', '"Onyx - surfaced board" by Kevin Walsh', 'CC BY 2.0', 'https://commons.wikimedia.org/wiki/File:Onyx_-_surfaced_board.jpg'],
  ['Pale onyx close-up', '"Onyx" by James St. John', 'CC BY 2.0', 'https://commons.wikimedia.org/wiki/File:%22Onyx%22.jpg'],
  ['Banded stone background', '"Turkish alabaster slab" by Kevin Walsh', 'CC BY 2.0', 'https://commons.wikimedia.org/wiki/File:Turkish_alabaster_slab.jpg'],
  ['Gift boxes', '"Brown gift box with red ribbon and bow" by Shixart1985', 'CC BY 2.0', 'https://commons.wikimedia.org/wiki/File:Brown_gift_box_with_red_ribbon_and_bow.jpg'],
  ['Saratoga Springs', '"628 North Broadway, Saratoga Springs NY" by Peter Flass', 'CC BY 3.0', 'https://commons.wikimedia.org/wiki/File:628_North_Broadway,_Saratoga_Springs_NY.jpg'],
];
export default function Credits() {
  return (
    <section className="page narrow">
      <h1>Image credits</h1>
      <p>Photos are from Wikimedia Commons, cropped and resized. Product images are illustrations filled with these stone photos until the store&apos;s own photography is ready.</p>
      <ul className="credit-list">{credits.map(([use, title, lic, url]) => (
        <li key={url}><strong>{use}:</strong> {title}, <a href={url} rel="noopener" target="_blank">{lic}</a></li>))}</ul>
    </section>
  );
}
