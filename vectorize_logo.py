import vtracer
import os

print(f"CWD actual: {os.getcwd()}")
print(f"Archivos en CWD: {os.listdir('.')}")

input_path = "logo-propuesto.png"
output_path = "logo-propuesto.svg"

if os.path.exists(input_path):
    print(f"Confirmado: {input_path} existe.")
    print(f"Tamaño: {os.path.getsize(input_path)} bytes")
    try:
        # Intentar con ruta absoluta explícita
        abs_input = os.path.abspath(input_path)
        abs_output = os.path.abspath(output_path)
        print(f"Llamando a vtracer con: {abs_input}")
        
        vtracer.convert_image_to_svg_py(
            abs_input, 
            abs_output,
            colormode = 'color',
            mode = 'spline',
            filter_speckle = 4,
            color_precision = 6
        )
        print(f"¡Éxito! Vectorial guardado en {output_path}")
    except Exception as e:
        print(f"Error durante la vectorización: {e}")
else:
    print(f"Error: No se encontró el archivo {input_path}")
