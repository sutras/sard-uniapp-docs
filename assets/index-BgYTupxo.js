import { M as Markdown } from "./index-R4jWsr0G.js";
import { d as defineComponent, c as createBlock, o as openBlock } from "./index-BQ9n9zQO.js";
const html = `<h1 id="首页">首页<a class="doc-anchor" href="#首页">#</a></h1>
`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const fm = { "title": "首页", "nav": { "title": "首页", "order": 0, "hidden": true }, "redirect": "/guide/intro" };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Markdown, {
        content: html,
        fm
      });
    };
  }
});
export {
  _sfc_main as default
};
