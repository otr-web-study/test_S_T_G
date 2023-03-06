const fields = {
  name: {
    en: 'name',
    wo: 'whrascwo',
  },
  height: {
    en: 'height',
    wo: 'acwoahrracao',
  },
  mass: {
    en: 'mass',
    wo: 'scracc',
  },
  hair_color: {
    en: 'hair_color',
    wo: 'acraahrc_oaooanoorc',
  },
  skin_color: {
    en: 'skin_color',
    wo: 'corahwh_oaooanoorc',
  },
  eye_color: {
    en: 'eye_color',
    wo: 'worowo_oaooanoorc',
    filter: true,
  },
  birth_year: {
    en: 'birth_year',
    wo: 'rhahrcaoac_roworarc',
    tag: 'blue',
  },
  gender: {
    en: 'gender',
    wo: 'rrwowhwaworc',
    tag: {
      male: 'green',
      female: 'violet',
      hermaphrodite: 'yellow',
      scraanwo: 'green',
      wwwoscraanwo: 'violet',
      acworcscraakacrcoowaahaowo: 'yellow',
    }
  }, 
  url: {
    en: 'url',
    wo: 'hurcan',
  }
};

const service_fields = {
  next: 'whwokao',
  'null': 'whhuanan',
  results: 'rcwochuanaoc',
}

export const transformCharacter = (lang, swapiCharacter) => {
  const character = Object.entries(fields).reduce((res, [name, field]) => {
    res[name] = swapiCharacter[field[lang]];
    if (field.filter) {
      res.filterField = res[name];
    }
    if (field.tag) {
      if (typeof field.tag === 'string') {
        res.tags.push([res[name], field.tag]);
      } else if (field.tag[res[name]]) {
        res.tags.push([res[name], field.tag[res[name]]]);
      }
    }
    return res;
  }, {tags: []});

  const idRegExp = /\/([0-9]*)\/$/;
  character.id = character.url.match(idRegExp)[1];
  return character;
};

export const getFieldName = (lang, fieldName) => {
  return lang === 'en' ? fieldName : service_fields[fieldName];
}