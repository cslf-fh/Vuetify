export default {
  methods: {
    checkBoolean(array, boolean, name) {
      boolean === true ? array.push({ name: String(name) }) : null;
    },
    checkValue(array, value, name, check) {
      value === check
        ? null
        : array.push({ name: String(name), value: String(value) });
    },
    checkValuePrefix(array, value, prefix, name, check) {
      value === check
        ? null
        : array.push({ name: String(prefix + name), value: String(value) });
    },
    checkValueAsText(array, value, text, name, check) {
      value === check
        ? null
        : array.push({ name: String(name), value: String(text) });
    },
  },
};
