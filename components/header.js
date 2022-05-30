import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as util from "utils";

export default function Header() {
  const Router = useRouter();
  const dataSidebar = util.json.dataSidebar;
  return (
    <div id="sidebar" className="active">
      <div className="sidebar-wrapper active">
        <div className="sidebar-header">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <a href="#">
                <Image
                  src="/assets/images/logo/logo.png"
                  width="88.52px"
                  height="19.19px"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="toggler">
              <a href="#" className="sidebar-hide d-xl-none d-block">
                <i className="bi bi-x bi-middle"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="sidebar-menu">
          <ul className="menu">
            <li className="sidebar-title">Menu</li>
            {dataSidebar?.map((item, idx) => {
              if (item.subNav === null) {
                return (
                  <li
                    key={idx}
                    className={
                      Router.pathname === item.path
                        ? "sidebar-item active"
                        : "sidebar-item"
                    }
                  >
                    <Link href={item.path}>
                      <a className="sidebar-link">
                        <i className={item.icon}></i>
                        <span>{item.name}</span>
                      </a>
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li
                    key={idx}
                    className={
                      item?.subNav
                        ?.map((subNav2) => subNav2.path)
                        .includes(Router.pathname)
                        ? "sidebar-item has-sub active"
                        : "sidebar-item has-sub"
                    }
                  >
                    <Link href={item.path}>
                      <a className="sidebar-link">
                        <i className={item.icon}></i>
                        <span>{item.name}</span>
                      </a>
                    </Link>
                    {item.subNav?.length > 0 && (
                      <ul className="submenu ">
                        {item.subNav?.map((sub, idxSub) => (
                          <li
                            key={idxSub}
                            className={
                              sub.path === Router.pathname
                                ? "submenu-item active"
                                : "submenu-item"
                            }
                          >
                            <Link href={sub.path}>{sub.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <button className="sidebar-toggler btn x">
          <i data-feather="x"></i>
        </button>
      </div>
    </div>
  );
}
