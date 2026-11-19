// src/components/NetworkBanner.tsx
import { signIn, useSession } from "next-auth/react";
import { jsx, jsxs } from "react/jsx-runtime";
function NetworkBanner() {
  const { data: session, status } = useSession();
  return /* @__PURE__ */ jsx("header", { className: "darkeraccent", children: /* @__PURE__ */ jsxs("nav", { className: "container breakout", "aria-label": "breadcrumb", children: [
    /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { className: "secondary", href: "/natrium", children: [
      /* @__PURE__ */ jsx("i", { className: "fa-solid fa-circle-nodes" }),
      " Red Natrium"
    ] }) }) }),
    status == "authenticated" ? /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { className: "secondary", href: "/cuenta", children: [
      session?.user?.name,
      /* @__PURE__ */ jsx("i", { className: "fa-solid fa-user" })
    ] }) }) }) : /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { className: "secondary", onClick: () => signIn("authentik"), children: [
      "Iniciar sesi\xF3n",
      /* @__PURE__ */ jsx("i", { className: "fa-solid fa-user" })
    ] }) }) })
  ] }) });
}

// src/components/Header.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function Header({ title, children }) {
  return /* @__PURE__ */ jsx2("header", { className: "accent", children: /* @__PURE__ */ jsx2("header", { className: "container", children: /* @__PURE__ */ jsxs2("nav", { children: [
    /* @__PURE__ */ jsx2("big", { children: /* @__PURE__ */ jsx2("a", { href: "/", children: /* @__PURE__ */ jsx2("big", { children: title }) }) }),
    /* @__PURE__ */ jsx2("ul", { children: /* @__PURE__ */ jsx2("li", { className: "sitenav", children }) })
  ] }) }) });
}
export {
  Header,
  NetworkBanner
};
