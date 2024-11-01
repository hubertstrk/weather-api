export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    tension: number;
    yAxisID: string;
  }[];
}

export interface ChartOptions {
  scales: {
    [key: string]: {
      title: {
        display: boolean;
        text: string;
      };
      position: string;
      display: boolean;
      ticks?: {
        callback: (value: number) => string;
      };
      suggestedMin?: number;
      suggestedMax?: number;
    };
  };
}
