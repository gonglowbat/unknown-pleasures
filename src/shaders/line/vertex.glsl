#include ../noise;

uniform float uTime;
uniform float uOffset;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float waveAmplitude = 1.0 - (abs(uv.x - 0.5) * 2.0);
    waveAmplitude = pow(waveAmplitude, 3.5);

    float wave = 0.0;
    wave += cnoise(vec2(modelPosition.x + uOffset, uTime * 0.02) * 50.0) * 0.018;
    wave += cnoise(vec2(modelPosition.x + uOffset, uTime * 0.0001) * 1000.0) * 0.1 * waveAmplitude;
    wave += pow(cnoise(vec2(modelPosition.x + uOffset, uTime * 0.1) * 2.5) + 1.0, 1.2) * 0.55 * waveAmplitude;

    modelPosition.y += wave;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;
}
