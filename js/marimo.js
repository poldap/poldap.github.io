angular.module('acadApp').controller('IframeController', function($scope, $sce) {
    // List of predefined sites
    $scope.sites = [
        { name: "Empty", url: "https://marimo.app/l/aojjhb?embed=true&show-chrome=true" },
        { name: "Sinusoid Plot", url: "https://marimo.app/?embed=true&show-chrome=true#code/JYWwDg9gTgLgBCAhlUEBQaD6mDmBTAOzykRjwBNMB3YGACzgF44AiABgDoBODgRgBYWaRGDBMEyVBwCCogBQ1y9RiwBmAVwA2mlgEoMaAAIiwHAMZ5tacnlVxsc3QC40cN3FCRYElCAhxEAGcEdHc4KDwYdSgCODk-ABp9DGNRc0tNa1t7TEcXMM9oeAJ1cABPAOCCMFd3CKiYuOqkg1TTCysbOwdnWrdC7yQYME0IGE1gACMOMDKRscq4EZg+8Mjo2LlllpSTdM7sh2resIAPTERT4GDmao4JgkCwRAs5NgS4ACYAKjuwYA+nzYbH0YXqGzi50u1x2Rj2HUyXRy8QgH2O+XcqgiAEd1IQzGVMIEJjYoOI-Bx1MAOMTgKS5IEYMgYIwALQcACsH0ZEDAjE5HwAbohNHjGJxPly4Iy8HzOMDeNy6BAqJhhaK8IwACpQPEfTSISaWRhQADkABIADolc2m0HuMB0IJ4Ikk4jkiCU6m0+mM5lsv4A6UwXmMQNCkVi97B2XijgKpUqtWRzU6vVwA1GzQmi2W4VQR3AW32tyIcATKI2V1093MClUmluqAMpmwcXckN8xVwdVRgUxuXxtjdwLK1W91O6vD6w3Gs3m6TF1aBYAlQIQOmYZ4kECRYiBaukm4hDiCv1mADWcgA2li8Lj8YSfcQPo7nYeXwFy7R1FXn1AAF0SzWBpNlWMIyxGH8-ybBJwMxHE8QIAkPygOCwjCN9Ahdf90IwtwVzXDdKG3Ms9ygA9-0CPC3GSOE0gRLJulySCK1-HDYLgO8H2Qp9OOaJYnWw1DX00GAPihK5AhOB0xJmUYYDkSSYS-KDKw4msoFPFM4G+OA7kIuQfkDb5uKQlD-20jVvmU4IAGpBPfSyJ10YDlg4U5M0sOR5xgJdMLksovM0OQWAAZVXdR1zpPRVncmBaE0PAfJYBc4EtQzPktf5rXUOB4AcvNkELXRzVisJCKi4itwU8R3JwMxVEcVZwUaBlIuikiFNhNp9kRQ5ckSaUOuq0jdzICjUOo4aiM3eYYBktwKToc8r2vSrOq3ZAyImyim2mjbRoUgCPkUehAkYa9eGBBIOWBICWvWGJWnhDImORRaQI2AxgGYggyOwJhmBYbAkFXbAWAxUs0l1AhHCAA" }
    ];

    // Default selected site
    $scope.selectedSite = $scope.sites[0].url;
    $scope.trustedSrc = $sce.trustAsResourceUrl($scope.selectedSite);

    // Function to update iframe source
    $scope.updateIframe = function() {
        $scope.trustedSrc = $sce.trustAsResourceUrl($scope.selectedSite);
    };
});