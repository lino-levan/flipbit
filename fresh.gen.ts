// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_cdn_upload from "./routes/api/cdn/upload.ts";
import * as $api_channel_channelId_gateway from "./routes/api/channel/[channelId]/gateway.ts";
import * as $api_channel_channelId_index from "./routes/api/channel/[channelId]/index.ts";
import * as $api_channel_channelId_message_messageId_ from "./routes/api/channel/[channelId]/message/[messageId].ts";
import * as $api_channel_channelId_messages from "./routes/api/channel/[channelId]/messages.ts";
import * as $index from "./routes/index.tsx";
import * as $Chat from "./islands/Chat.tsx";
import * as $Chatbox from "./islands/Chatbox.tsx";
import * as $Sidebar from "./islands/Sidebar.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/cdn/upload.ts": $api_cdn_upload,
    "./routes/api/channel/[channelId]/gateway.ts":
      $api_channel_channelId_gateway,
    "./routes/api/channel/[channelId]/index.ts": $api_channel_channelId_index,
    "./routes/api/channel/[channelId]/message/[messageId].ts":
      $api_channel_channelId_message_messageId_,
    "./routes/api/channel/[channelId]/messages.ts":
      $api_channel_channelId_messages,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Chat.tsx": $Chat,
    "./islands/Chatbox.tsx": $Chatbox,
    "./islands/Sidebar.tsx": $Sidebar,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
