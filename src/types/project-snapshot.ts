export type ProjectSnapshotPayload = {
  url: string;
  screenshot: string;
  width: number;
  height: number;
  title: string;
};

export type ProjectSnapshotApiResponse = {
  status: "success" | "fail";
  data?: {
    title?: string;
    url?: string;
    screenshot?: {
      url?: string;
      width?: number;
      height?: number;
    };
  };
};
