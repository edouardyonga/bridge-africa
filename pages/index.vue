<template>
  <div>
    <v-row justify="center">
      <v-col
        cols="8"
        sm="6"
        md="3"
        v-for="(service, index) in services"
        :key="index"
      >
        <v-card class="mx-3" max-width="430">
          <v-img
            :src="service.img"
            height="200px"
            style="background-color: #cccccc"
          ></v-img>

          <v-card-title class="pa-4">
            {{ service.title }}
          </v-card-title>

          <v-card-subtitle class="pa-4">
            {{ service.subTitle }}
          </v-card-subtitle>

          <v-card-actions class="pa-4">
            <v-btn color="primary lighten-2" text @click="servIndex = index">
              14,500 XAF
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn color="primary" @click="servIndex = index"> Buy now </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        title: "INVESTMENT  PLANNING",
        img:
          "https://static.wixstatic.com/media/1d48d8c57a7449499b2cecf09ceda9c1.jpg/v1/fill/w_556,h_300,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/1d48d8c57a7449499b2cecf09ceda9c1.webp",
        subTitle: "Attain Your Financial Goals",
        description:
          "Our passion is to assist in ensuring that our client's goals /objectives are matched to their available resources which goes a long way to enable us determine the efficiency and effectiveness of their investment goals. In addition we provide the following investment plans for our clients some of which include.",
      },
      {
        title: "INVESTMENT ADVISORY",
        img:
          "https://static.wixstatic.com/media/e16b861b852b4d2183fd87ef4f760901.jpg/v1/fill/w_556,h_300,fp_0.63_0.28,q_80,usm_0.66_1.00_0.01/e16b861b852b4d2183fd87ef4f760901.webp",
        subTitle: "Achieve Your Goals",
        description:
          "As an asset management firm, we cut across a wide range of securities such as stocks, bonds, mutual funds, or exchange traded funds. Also we assess every aspect of your financial life including saving, investments, insurance, taxes, retirement, and estate planning and help you develop a detailed strategy or financial plan for meeting all your financial goals.",
      },
      {
        title: "MARKETS & INVESTMENT CONSULTING",
        img:
          "https://static.wixstatic.com/media/5e960dc55c064a92aeb2aaa31d57cbcb.jpg/v1/fill/w_556,h_300,fp_0.71_0.22,q_80,usm_0.66_1.00_0.01/5e960dc55c064a92aeb2aaa31d57cbcb.webp",
        subTitle: "Gain Expert Guidance",
        description:
          "Looking to develop your business but not sure where to turn? Need help planning or executing your next project? Let us guide you. Any organization can move forward with small incremental changes, but building for the future in today’s rapidly evolving environment means taking bold chances and making insightful decisions.",
      },
      {
        title: "GROWTH & POSITIONING ANALYSIS",
        img:
          "https://static.wixstatic.com/media/0141bb700ad54cf2b0457ae50b0704c5.jpg/v1/fill/w_556,h_300,fp_0.36_0.25,q_80,usm_0.66_1.00_0.01/0141bb700ad54cf2b0457ae50b0704c5.webp",
        subTitle: "Be On The Spotlight!",
        description:
          "With years of experience, our staff has the capabilities and expertise to take your business to the next level. At Capital Insider, we combine our insights and skills to transform your processes and strategies, and in turn, your company. We’re proud to help shape and improve how our clients structure and manage their business.",
      },
      {
        title: "MICRO BUSINESS LOANS",
        img:
          "https://static.wixstatic.com/media/5e960dc55c064a92aeb2aaa31d57cbcb.jpg/v1/fill/w_556,h_300,fp_0.71_0.22,q_80,usm_0.66_1.00_0.01/5e960dc55c064a92aeb2aaa31d57cbcb.webp",
        subTitle: "The Help You Need",
        description:
          "Looking to develop your business but not sure where to turn to? Need help planning, financing or executing your next project? Let us guide you with our fast-track, interest free micro loan scheme. Any organization can move forward with small incremental changes, but building for the future in today’s rapidly evolving environment means taking bold steps and making insightful decisions.",
      },
      {
        title: "FUND MANAGEMENT.",
        img:
          "https://static.wixstatic.com/media/34aef00a568e4c7db32033c39660ed8d.jpg/v1/fill/w_556,h_300,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/34aef00a568e4c7db32033c39660ed8d.webp",
        subTitle: "Backup Your Finances",
        description:
          "We  invests pooled funds from clients into a variety of securities and assets such as currencies,stocks,futures,options,metals,real estate and ETF’s. Also we make timed investment decisions on behalf of our clients to enable them grow their finances and portfolio.",
      },
    ],
  }),
};
</script>
