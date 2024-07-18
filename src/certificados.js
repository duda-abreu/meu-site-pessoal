import CertGitGithub from '@/assets/CertGitGithub.jpg'; // Substitua pelo caminho correto da imagem do CertGitGithub
import CertificadoExcel from '@/assets/CertificadoExcel.jpg'; // Substitua pelo caminho correto da imagem do CertificadoExcel

export default {
  data() {
    return {
      certificados: [
        {
          id: 1,
          nome: 'Git e GitHub',
          imagem: CertGitGithub
        },
        {
          id: 2,
          nome: 'Excel Avançado',
          imagem: CertificadoExcel
        }
      ]
    };
  }
};
