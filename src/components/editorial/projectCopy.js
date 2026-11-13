// Short display copy; original project records remain available for SEO and reference.
const introductions = {
  1: 'A Pleasanton rebuild with generous living spaces, a quiet exterior palette and an easy flow from room to room.',
  2: 'A Palo Alto rebuild pairing a sculptural entry with bright living spaces and a calm, welcoming atmosphere.',
  3: 'A Belmont remodel and addition, bringing the expanded home together through simple details and a cohesive palette.',
  4: 'A light-filled San Jose remodel with open rooms and an easy connection to the outdoors.',
  5: 'A San Jose remodel pairing a sculpted fireplace and skylit kitchen with warm, livable finishes.',
  6: 'A San Mateo remodel centered on a custom kitchen and the sculptural range hood its owners envisioned.',
  7: 'A Newark addition with a rebuilt kitchen, a cohesive material palette and a distinctive custom range hood.',
  8: 'A Cupertino remodel and addition shaped around the homeowner’s selected finishes and carefully coordinated details.',
  9: 'A Palo Alto remodel pairing nine-foot ceilings with clean lines and a contemporary material palette.',
  10: 'A detached San Jose ADU with an efficient layout and extra storage beneath its raised living space.',
  11: 'A Fremont remodel and addition featuring a black-and-white bathroom, built-in soaking tub and floating vanity.',
  12: 'A detached San Jose ADU with a raised foundation and practical storage beneath a bright, compact living space.',
  13: 'A San Jose remodel and addition bringing the kitchen, bathrooms and bedrooms together as one light-filled home.',
  15: 'A new Los Altos home with restrained architectural lines, quiet materials and a generous setting.',
  16: 'A Sunnyvale addition and remodel connecting the kitchen, stairs and bedrooms through a brighter, more open plan.',
  17: 'A San Jose addition and remodel, with white cabinetry and warm wood connecting the kitchen, living spaces and bedrooms.',
  18: 'A San Jose addition and remodel with an updated kitchen, refreshed bathrooms and a more open everyday flow.',
  19: 'A Mountain View addition connecting the kitchen, bathrooms and bedrooms in a light-filled plan from entry to yard.',
  20: 'A new Los Altos home with an open kitchen and living space, balanced by quiet, sunlit bedrooms.',
  21: 'A compact Palo Alto remodel with a brighter kitchen and refreshed bathroom, retaining the home’s original scale and charm.',
  22: 'A Palo Alto remodel introducing a new staircase and spa-style bathroom with simple, tailored details.',
  23: 'A Cupertino interior renovation carrying a warm, consistent palette from the kitchen to the bedrooms and bathrooms.',
  24: 'A Hillsborough residence connecting generous living spaces, a welcoming kitchen and quiet bedroom wings.',
  25: 'A Los Gatos remodel bringing the living room and bathrooms together through clean lines and soft, neutral finishes.',
  26: 'A Sunnyvale addition with refreshed living spaces and newly finished bathrooms, designed for everyday family life.',
  27: 'A Los Altos remodel transforming four bedrooms and two-and-a-half baths into a brighter three-bedroom, three-bath home.',
  30: 'A new Menlo Park home, currently in framing. Site tours offer a closer look at the structure before the walls close up.',
  31: 'A two-story Cupertino remodel with white oak finishes, a waterfall kitchen island, custom closets and refreshed bathrooms.',
  32: 'A Cupertino addition and remodel with a skylit walnut kitchen, a stone fireplace and newly finished bathrooms and closets.'
};
export const projectIntroduction = project => introductions[project.id] || project.description;

export function galleryCaption(notes, fallback) {
  const meaningful = notes.filter(note => !/short walkthrough|walkthrough video/i.test(note));
  const text = meaningful[meaningful.length - 1] || '';
  const options = [
    [/fram|scaffold|roofline|window openings/i, 'Exposed framing reveals the rooflines and openings before the finished surfaces go in.'],
    [/bath|vanity|shower|tub/i, 'Soft light and clean surfaces give the bathroom a calm, uncluttered feel.'],
    [/stair|steps|railing|elevated/i, 'Carefully detailed steps connect the rooms while giving each space its own identity.'],
    [/closet|wardrobe|storage|millwork|laundry/i, 'Thoughtful built-ins keep everyday spaces organized, with storage integrated into the room.'],
    [/fireplace|hearth|media wall/i, 'The fireplace anchors the living space, with simple details and room to gather.'],
    [/skylight|vault|ceiling/i, 'Daylight from above opens up the interior, drawing the kitchen and living spaces together.'],
    [/yard|garden|outdoor|patio|deck/i, 'Generous openings connect the interior to the garden, carrying light and views through the home.'],
    [/kitchen|island|cabinet|counter|hood/i, 'Clean cabinetry and practical work surfaces connect the kitchen with the living space.'],
    [/bedroom/i, 'A quiet palette and simple details give the bedrooms a restful, cohesive feel.'],
    [/exterior|facade|elevation|lot/i, 'Balanced proportions and quiet materials give the exterior a calm presence.'],
    [/living|room|interior/i, 'Connected rooms and a consistent material palette create a comfortable flow through the home.']
  ];
  return options.find(([pattern]) => pattern.test(text))?.[1] || 'Simple details and a consistent palette bring continuity from one space to the next.';
}
