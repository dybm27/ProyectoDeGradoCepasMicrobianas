<template>
  <div>
    <img style="cursor: pointer;"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADdElEQVRoge2YzW8UZRzHP8+87OxOty/4hpU3Q1MSCCRgqG1dOEAkDVE42BjDgYAHSbz5D3j1LgexBwkaE7lIYsQQo0YDVsREEkxUBNIitdJh7dLusq+dmYfDxDUEgWH6PNsY93OaTJ7n+f4+O8/s88wDbdq0+U8j4jSSH597AeQYsGKxgYVjR8Yf/fT9bYsd52+MeM3kuygoHsCfvJyb3XPgWxVjQWwBVqoKNDOZSGLvq2dVjBdXQBmGk4okJn4bUiGxJAIqJVouIExLqUTrn4BlKpVouQCmoVSi9QKgVKL1U6ijM7q4j0ThpddirxMtF3Cee/6BEguXfs7FlYi5lfheJi85OWJ06IH1WTqC65d+Zf7EcYLiPJ27dpPdMaIjBtA0heaOf4Cf95D1GsXPPiGYv6kjBtAgEFbKzYJTff0gQxamp1THNFEuIBwHjGjqhuWy6uHvQr2AaWH3RptX35sBwOzqUR3TRMs7kNm8NbqQIRgG1hNP6ogBNAm4gzmEFf3B2StWI1IpHTGAJgGjI4uzbj0AwjRA6ltG9KzEoaQx9TsAjasTlM+e0RIDmgTqVy4SlooIM5pGxZMnCGbzOqL0CFTP/wBAdscu0hs3I+s1ZscOE5aKyrOUbyXC8i2qF86DIXCHtiOcNH/lPXzvOoWjR+jcvRc/P4Pv3UAGPsIQ2GvW4m55FsyH/z2VC5TPfI1s1Elv2IS57BH8mWmcvn587zqNa5PMjr19d6fvTtO4fJGefQcfOk+pgKzXKI9/A0RbCu+tN++Y+8K0kIH/T/jjy8G08GemqV74cWkFZOBT+vwkYSXaPjSuTkQBy3tJr9+Es2EjqTVrKZ/+itKXp5D1Gn7ea/ZP9fUnyl28gAypnBun9MUpgrkCAMJJk9kyQMfwduyVq+9ont05gju0jdovP+H/OY30F7CfWkXmmYHWC/g3POY+Okbj2mTznr3qaR57/Q2Ek75nP8PtwN06vJjoJokFGpNXKLz3DmG10rwnTIueV/bft3jVJFsHQsnND48SViuYXd0gomE6R17E7lVyBhybRE9ABn5zUQqK8wC4A8Nkd+r7dLwXiZ6AsG26R/dhdnVjdi+ja88oPS/vBxHrjEApid8BdzCHO5hTWUsiluZkTiH/G4E/tFbx78Q6yognYMhDtFZiChEeamFemzZtlorb+oIyI4Q5NRoAAAAASUVORK5CYII="
      @click="descargar(rowData)"
    />
  </div>
</template>

  <script>
export default {
  props: {
    rowData: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
    },
  },
  methods: {
    descargar(data) {
      window.open(data.rutaPublica);
    },
  },
};
</script>