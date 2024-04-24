export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_URL =
  "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png";

export const RESTAURANT_SWIGGY_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3071588&lng=73.1812187&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const MENU_URL = (id) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.30080&lng=73.20430&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`;
