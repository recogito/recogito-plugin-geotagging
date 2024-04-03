import { Camera } from '@phosphor-icons/react';
import html2canvas from 'html2canvas';
import type { DocumentInTaggedContext } from 'src/Types';

interface PNGDownloadProps {

  document: DocumentInTaggedContext;

}

export const PNGDownload = (props: PNGDownloadProps) => {

  const onExportPDF = () => {
    html2canvas(document.querySelector('.ou-gtp-document-map')!, { useCORS: true, scale: 2 }).then(canvas => {
      const anchor = document.createElement('a');
      anchor.download = `${props.document.name}.png`;
      anchor.href = canvas.toDataURL()
      anchor.click();
    });
  }

  return (
    <button
      className="unstyled download-geojson"
      onClick={onExportPDF}>
      <Camera size={20} /> PNG
    </button>
  )

}