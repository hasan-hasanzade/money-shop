const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: true,
    title: "Главная ",
    link: "/",
    active: "active",
    sub_menus: [
      { link: "/", title: "Data analytics" },
      { link: "/home-2", title: "Payment Gateway" },
      { link: "/home-3", title: "CRM Software" },
      { link: "/home-4", title: "Security Software" },
      { link: "/home-5", title: "Saas" },
    ],
  },
  {
    id: 2,

    title: "Услуги ",
    link: "/#benefits",
  },
  
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Как работает",
    link: "/#clients_way",
    active: "",
    sub_menus: [
      { link: "/project", title: "Project" },
      { link: "/project-details", title: "Project Details" }, 
    ],
  },

  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Преимущества",
    link: "/#advantages",
    active: "",
    sub_menus: [
      { link: "/blog", title: "Blog" },
      { link: "/blog-list", title: "Blog List" },
      { link: "/blog-details", title: "Blog Details" },
      { link: "/blog-details-2", title: "Blog Details 02" },
    ],
  },
  
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "FAQ",
    link: "/#faq",
    active: "",
  },

  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Подключение",
    link: "/#contact",
    active: "",
  },
  

];
export default menu_data;
