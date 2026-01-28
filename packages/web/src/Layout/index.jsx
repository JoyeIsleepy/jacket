// 主文件 - 修复后
import {
  DoubleRightOutlined,
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from "@ant-design/icons";
import {
  PageContainer,
  ProCard,
  ProConfigProvider,
  ProLayout,
  SettingDrawer,
} from "@ant-design/pro-components";
import { css } from "@emotion/react";
import { Button, ConfigProvider, theme } from "antd";
import React, { useState } from "react";
import defaultProps from "./defaultProps";

const Item = (props) => {
  const { token } = theme.useToken();
  return (
    <div
      css={css`
        color: ${token.colorTextSecondary};
        font-size: 14px;
        cursor: pointer;
        line-height: 22px;
        margin-bottom: 8px;
        &:hover {
          color: ${token.colorPrimary};
        }
      `}
      style={{ width: "33.33%" }}
    >
      {props.children}
      <DoubleRightOutlined style={{ marginInlineStart: 4 }} />
    </div>
  );
};

const List = (props) => {
  const { token } = theme.useToken();
  return (
    <div style={{ width: "100%", ...props.style }}>
      <div
        style={{
          fontSize: 16,
          color: token.colorTextHeading,
          lineHeight: "24px",
          fontWeight: 500,
          marginBlockEnd: 16,
        }}
      >
        {props.title}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {new Array(6).fill(1).map((_, index) => (
          <Item key={index}>具体的解决方案-{index}</Item>
        ))}
      </div>
    </div>
  );
};

export default () => {
  const [settings, setSetting] = useState({
    fixSiderbar: true,
    layout: "side", // 修复1：mix→side 纯侧边栏布局（一级菜单直接显示在左侧）
    splitMenus: false, // 修复2：关闭分栏菜单（避免菜单跑到顶部）
  });
  const [pathname, setPathname] = useState("/home"); // 优化：默认跳转到首页，匹配菜单
  const [num, setNum] = useState(40);

  if (typeof document === "undefined") return <div />;

  return (
    <div id="test-pro-layout" style={{ height: "100vh", overflow: "auto" }}>
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          getTargetContainer={() =>
            document.getElementById("test-pro-layout") || document.body
          }
        >
          <ProLayout
            title="我的项目"
            {...defaultProps}
            location={{ pathname }}
            token={{
              header: { colorBgMenuItemSelected: "rgba(0,0,0,0.04)" },
            }}
            menuDataRender={(menuData) => {
              console.log("menuData", menuData);
              return menuData;
            }}
            // 修复5：移除group分组（无分组时用默认的menu类型）
            menu={{
              collapsedShowGroupTitle: true,
            }}
            actionsRender={(props) => {
              if (props.isMobile) return [];
              if (typeof window === "undefined") return [];
              return [
                <InfoCircleFilled key="info" />,
                <QuestionCircleFilled key="question" />,
              ];
            }}
            headerTitleRender={(logo, title, info) => {
              const defaultDom = (
                <a>
                  {logo}
                  {title}
                </a>
              );
              if (
                typeof window === "undefined" ||
                document.body.clientWidth < 1400 ||
                info.isMobile
              ) {
                return defaultDom;
              }
              return <>{defaultDom}</>;
            }}
            menuFooterRender={(props) =>
              props?.collapsed ? null : (
                <div style={{ textAlign: "center", paddingBlockStart: 12 }}>
                  <div>© 2021 Made with love</div>
                  <div>by Ant Design</div>
                </div>
              )
            }
            menuItemRender={(item, dom) => (
              <div onClick={() => setPathname(item.path || "/home")}>{dom}</div>
            )}
            {...settings}
          >
            <PageContainer
              token={{ paddingInlinePageContainerContent: num }}
              footer={[
                <Button key="3">重置</Button>,
                <Button key="2" type="primary">
                  提交
                </Button>,
              ]}
            >
              <ProCard style={{ height: "200vh", minHeight: 800 }}>
                <div style={{ padding: "24px", fontSize: "16px" }}>
                  这里是页面主内容！左侧菜单已正常显示，点击「首页/关于」可切换pathname
                </div>
              </ProCard>
            </PageContainer>
            <SettingDrawer
              pathname={pathname}
              enableDarkTheme
              getContainer={(e) =>
                typeof window === "undefined"
                  ? e
                  : document.getElementById("test-pro-layout")
              }
              settings={settings}
              onSettingChange={setSetting}
              disableUrlParams={false}
            />
          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  );
};
