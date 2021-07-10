export default {
  methods: {
    checkBoolean(attr, boolean, name) {
      boolean === true ? attr.push({ name: String(name) }) : null;
    },
    checkValue(attr, value, name, check) {
      value === check
        ? null
        : attr.push({ name: String(name), value: String(value) });
    },
  },
};
