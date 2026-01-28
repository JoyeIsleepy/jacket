import {
  ChromeFilled,
  CrownFilled,
  SmileFilled,
  TabletFilled,
  LogoutOutlined,
} from "@ant-design/icons";
import { Dropdown } from "antd";

// 原有的完整路由配置（保留所有层级/图标/外链）
const route = {
  path: "/",
  routes: [
    {
      path: "/home",
      name: "首页",
      icon: "HomeOutlined",
    },
    {
      path: "/about",
      name: "关于",
      icon: "InfoCircleOutlined",
    },
    {
      path: "/list",
      name: "列表页",
      icon: "UnorderedListOutlined",
      routes: [
        {
          path: "/list/table",
          name: "表格列表",
          icon: "TableOutlined",
        },
        {
          path: "/list/card",
          name: "卡片列表",
          icon: "AppstoreOutlined",
        },
      ],
    },
    {
      path: "https://ant.design",
      name: "Ant Design 官网",
      icon: "ChromeOutlined",
    },
  ],
};

// 你的头像配置
const avatarProps = {
  src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
  size: "small",
  title: "七妮妮",
  render: (props, dom) => {
    return (
      <Dropdown
        menu={{
          items: [
            {
              key: "logout",
              icon: <LogoutOutlined />,
              label: "退出登录",
            },
          ],
        }}
      >
        {dom}
      </Dropdown>
    );
  },
};

// 背景图配置（保留你原有）
const bgLayoutImgList = [
  {
    src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
    left: 85,
    bottom: 100,
    height: "303px",
  },
  {
    src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
    bottom: -68,
    right: -45,
    height: "303px",
  },
  {
    src: "https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png",
    bottom: 0,
    left: 0,
    width: "331px",
  },
];
 
export default {
  location: {
    pathname: "/",
  },
  route,
  avatarProps,
  bgLayoutImgList,
};
